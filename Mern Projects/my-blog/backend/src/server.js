import express from "express";
import fs from "fs";
import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });
import dbConnection from "../database/dbConnection.js";
import mongoose from "mongoose";

const credentials = JSON.parse(fs.readFileSync("./credentials.json"));
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
dbConnection();

//Define article schema
const articleSchema = new mongoose.Schema({
  name: String,
  upvotes: Number,
  comments: [{ postedBy: String, text: String }],
});

const Article = mongoose.model("Article", articleSchema);

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;
  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
  req.user = req.user || {};
  next();
});

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await Article.findOne({ name });
  if (article) {
    const upvoteIds = article.upvoteIds || [];
    article.canUpvote = uid && !upvoteIds.includes(uid);
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    sendStatus(401);
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await Article.findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    const canUpvote = uid && !upvoteIds.includes(uid);

    if (canUpvote) {
      await Article.updateOne(
        { name },
        {
          $inc: { upvotes: 1 },
          $push: { upvoteIds: uid },
        }
      );
    }

    const updatedArticle = await Article.findOne({ name });

    res.json(updatedArticle);
  } else {
    res.send(`The article doesn'/t exist`);
  }
});

app.post("/api/articles/:name/comment", async (req, res) => {
  const { name } = req.params;
  const { text } = req.body;
  const { email } = req.user;

  await Article.updateOne(
    { name },
    {
      $push: { comments: { postedBy: email, text } },
    }
  );
  const article = await Article.findOne({ name });
  if (article) {
    res.send(article);
  } else {
    res.send("The article doesn'/t exist");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
