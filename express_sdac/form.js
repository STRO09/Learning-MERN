const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))
app.get('/', (req,res)=> {
    res.sendFile("/views/form.html", {root: __dirname});
})

app.post('/createUser', (req,res)=> {
    const data = req.body;
    res.json(data);
})
app.listen(3001, ()=> {
    console.log("Listening on port 3001....");
})