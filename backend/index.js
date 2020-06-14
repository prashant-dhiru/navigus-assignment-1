// note, io(<port>) will create a http server for you
const io = require('socket.io')(4113);
let userList = [];
let newUser;
let user2;

console.log("Socket.IO server ready....");
io.on('connection', (socket) => {
    socket.on('addConUser',(data)=>{ 
        var initials = data.name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        newUser = {name: data.name, avtxt: initials};
        if(data.doc == '1'){
            console.log(newUser);
            userList.push(newUser)
            io.emit('updatedUser','1' ,userList);
        }if(data.doc == '2'){
            console.log(newUser);
            userList.push(newUser)
            io.emit('updatedUser','2' ,userList);
        }
    });
});
