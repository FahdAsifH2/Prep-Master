const express = require('express')
const app = express()
const path = require("path")
//middleware
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))


app.get("/",(req,res)=>
{
 console.log("home route")
 res.render("./index")
})

app.get("/index",(req,res)=>
{
    res.render("html")
})
app.listen(3000,(req,res)=>
{
 console.log("app is listening on local host 3000")
})



