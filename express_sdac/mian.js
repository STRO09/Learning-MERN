const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    res.sendFile("/views/home.html", {root: __dirname});
})


app.get('/About', (req,res)=> {
    res.sendFile("/views/About.html", {root: __dirname});
})

app.get('/Contact', (req,res)=> {
    res.sendFile("/views/Contact.html", {root: __dirname});
})

app.listen(3001, ()=> {
    console.log("Listening on port 3001....");
})