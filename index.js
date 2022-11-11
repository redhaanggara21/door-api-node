const app = require('express')();
const http = require('http').Server(app);
const index = require('./routes/index');
const message = require('./routes/message');
const io = require('socket.io')(http);

require('./consumer.js')(io);

app.use('/', index);
app.use('/message', message);

http.listen(3001, function() {
	console.log('listening on *:3001');
});