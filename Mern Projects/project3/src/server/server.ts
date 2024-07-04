import express from "express";

const app = express();
const port = 8080;

app.use(express.static("dist"))

app.set("view engine", "ejs");

app.use("/",(req,res)=>{
    res.render("index")
})

app.listen(port,()=>{
    console.info(`server is running on port ${port}`);
})