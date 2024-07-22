import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });
import dbConnection from "../database/dbConnection.js";

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
dbConnection();

const articleInfo = [
  {
    name: "react",
    upvotes: 2,
    comments: [],
  },
  {
    name: "node",
    upvotes: 0,
    comments: [],
  },
  {
    name: "mongodb",
    upvotes: 3,
    comments: [],
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articleInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(
      `The article with name ${article.name} has ${article.upvotes} upvotes`
    );
  } else {
    res.send(`The article doesn'/t exist`);
  }
});

app.post("/api/articles/:name/comment", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articleInfo.find((a) => a.name === name);
  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send("The article doesn'/t exist");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
