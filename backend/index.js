// note, io(<port>) will create a http server for you
const io = require('socket.io')(4113);
user = [];
io.on('connection', (socket) => {
//   io.emit('this', { will: 'be received by everyone'});

//   socket.on('private message', (from, msg) => {
//     console.log('I received a private message by ', from, ' saying ', msg);
//   });

//   socket.on('disconnect', () => {
//     io.emit('user disconnected');
//   });
    socket.on('userConnected',(userID)=>{
        console.log('user connected '+ userID);
        user.push(userID);
    })

});