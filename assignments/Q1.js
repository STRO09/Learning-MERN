const express = require('express')

const app = express();

app.get('/', (req,res)=> {
    res.end("Welcome to expressjs application ! ...");

})


app.listen(3001, ()=> {
    console.log("Server listening on port 3001");
})