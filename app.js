const express = require('express');
const app = express();
const PORT = process.env.PORT || 3061;

app.use(express.json())
app.use(express.urlencoded({ extended : true }))


const Functiondb = require('./routes/Functiondb');

app.use('/api',Functiondb);


app.use("/",function(req, res){
    res.send("Looooooo");

});

app.listen(PORT, ()=>{
    console.log("Server running at http://localhost:"+PORT);
});
