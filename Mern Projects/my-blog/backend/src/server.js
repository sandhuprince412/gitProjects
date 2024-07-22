import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });
import dbConnection from "../database/dbConnection.js";
import mongoose from "mongoose";

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

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await Article.findOne({ name });
  if (article) {
    res.json(article);
  } else {
    res.sendStatus(404);
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  await Article.updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    }
  );
  const article = await Article.findOne({ name });
  if (article) {
    res.send(
      `The article with name ${article.name} has ${article.upvotes} upvotes`
    );
  } else {
    res.send(`The article doesn'/t exist`);
  }
});

app.post("/api/articles/:name/comment", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  await Article.updateOne(
    { name },
    {
      $push: { comments: { postedBy, text } },
    }
  );
  const article = await Article.findOne({ name });
  if (article) {
    res.send(article.comments);
  } else {
    res.send("The article doesn'/t exist");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
