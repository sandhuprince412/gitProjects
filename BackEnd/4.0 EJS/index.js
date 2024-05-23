import express from "express";
import ejs from "ejs";
 
const app = express();
const port = 3000;


app.get("/",(req,res)=>{
const today = new Date();
const day = today.getDay();

let type = "a weekday";
let adv = "its time to work hard";

if(day === 0 || day === 6){
    type = "the weekend";
    adv = "its time to have fun";
}

res.render("index.ejs",{
    daytype : type,
    advice: adv,
});
})

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
})