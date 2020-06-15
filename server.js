//import 
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;
var moment = require('moment');

//start http server
server.listen(port);

//server compiled frontend in /frontend/dist folder
app.use(express.static(__dirname+"/frontend/dist/"));
app.get(/.*/,function(req,res){
    res.sendFile(__dirname+"/frontend/dist/index.html");
});

//serve socket.io over http server
let avatarColors = Array("secondary","primary","dark","success","danger","warning","info")
let userList = new Map()
let newUser;
console.log("Socket.IO server ready....");
io.on('connection', (socket) => {
    socket.on('addConUser',(data)=>{ 
        if(data.name == null)
            return;
        var initials = data.name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

        var color = avatarColors[Math.floor(Math.random() * avatarColors.length)]; 
        
        var date = moment().format('DD-MM-YYYY hh:mm:ss');

        newUser = {
            name: data.name, 
            avtxt: initials, 
            avaCol:color,
            lastLogin: date
        };
        
        userList.set(data.uid,newUser);
        console.log(Array.from(userList));
        io.emit('updatedUser',(Array.from(userList)));
    });
    socket.on('destoryUser',(data)=>{
        userList.delete(data);
        console.log(Array.from(userList));
        socket.broadcast.emit('updatedUser',(Array.from(userList)));
    });
});

console.log('frontend server started')