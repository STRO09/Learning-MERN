const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.end("Home....");
})


app.get('/About', (req,res)=> {
    res.end("About....");
})

app.get('/Contact', (req,res)=> {
    res.end("Contact....");
})

app.listen(3001, ()=> {
    console.log("Listening on port 3001....");
})