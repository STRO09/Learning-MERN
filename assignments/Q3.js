const express = require('express')

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.post('/submit', (req,res)=> {
    res.json(req.body);

})


app.listen(3001, ()=> {
    console.log("Server listening on port 3001");
})