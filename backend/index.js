// note, io(<port>) will create a http server for you
const io = require('socket.io')(4113);
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
        newUser = {name: data.name, avtxt: initials, avaCol:color};
        
        if(data.doc == '1'){
            userList.set(data.uid,newUser);
            console.log(Array.from(userList));
            io.emit('updatedUser','1' ,(Array.from(userList)));
        }
    });
    socket.on('destoryUser',(data)=>{
        userList.delete(data);
        console.log(Array.from(userList));
        socket.broadcast.emit('updatedUser','1' ,(Array.from(userList)));
    });
});
