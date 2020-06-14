// note, io(<port>) will create a http server for you
const io = require('socket.io')(4113);
user = [];
console.log("Socket.IO server ready....");
io.on('connection', (socket) => {
    socket.on('addConUser',(data)=>{ 
        user.push(data)
        console.log(user)
        io.emit('addConUser',user);
    });
});
//   io.emit('this', { will: 'be received by everyone'});

//   socket.on('private message', (from, msg) => {
//     console.log('I received a private message by ', from, ' saying ', msg);
//   });

//   socket.on('disconnect', () => {
//     io.emit('user disconnected');
//   });