var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
var util = require('util');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + req.url,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var Room=io.sockets.on('connection', function (socket) {
//	while(1)

  socket.on('my other event', function (data) {
    console.log(data);
    socket.get('nickname', function (err, name) {
      console.log('Chat message by ', name);
      	  socket.broadcast.emit('news', { hello: name+data["my"] });
    });    
  });
  socket.on('disconnect', function () {
    io.sockets.emit('user disconnected');
  });
	socket.on('set nickname', function (name) {
    socket.set('nickname', name, function () {
      socket.broadcast.to(joinedRoom).send(name+' joined room');
      //socket.emit('ready');
      console.log(name);
    });
  });

  socket.on('msg', function () {
    socket.get('nickname', function (err, name) {
      console.log('Chat message by ', name);
    });
  });
  
  
//  socket.join("ROOM1");
//  console.log(util.inspect(Room.manager.roomClients, true, null));
//  console.log(util.inspect(Room.manager.rooms, true, null));
  
	var joinedRoom = null;
    socket.on('join room', function(data) {
      socket.join(data);
      joinedRoom = data;
      socket.emit('joined', "you've joined " + data);      
    }); 
    socket.on('fromclient', function(data) {
      if (joinedRoom) {
        socket.broadcast.to(joinedRoom).send(data);
      } else {
        socket.send(
           "you're not joined a room." +
           "select a room and then push join."
        );
      }
    });
	socket.on('message', function(data) {
    console.log("Client data: " + data);

          // lookup room and broadcast to that room
    socket.get('room', function(err, room) {
          //room example - https://github.com/learnboost/socket.io
          // neither method works for me
//          socket.broadcast.to(room).emit('new fan');
//          io.sockets.in(room).emit('new non-fan');
          io.sockets.in(room).emit('message', data);
    })
});

});
