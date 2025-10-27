const express = require("express");
const router = require("./routes/empRoutes")
const app = express();

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",router);


app.listen(3001, ()=> {
    console.log("Server listening on 3001...")
})