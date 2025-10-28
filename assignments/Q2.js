const express = require('express')

const app = express();

app.get('/home', (req,res)=> {
    res.end("Welcome boy");
})



app.get('/about', (req,res)=> {
    res.end("this is our team ig");
})


app.listen(3001, ()=> {
    console.log("Server listening on port 3001");
})