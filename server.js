const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname+"/frontend/dist/"));
app.get(/.*/,function(req,res){
    res.sendFile(__dirname+"frontend/dist/index.html");
});

app.listen(port);
console.log('frontend server started')