module.exports = function(io) {
	io.on('connection', function(socket) {
		console.log('A user connected');

		socket.broadcast.emit('hallo there');
		
		socket.on('chat message', function(msg) {
			console.log('message:', msg);
			io.emit('chat message', msg);
		});

		socket.on('disconnect', function() {
			console.log('User disconnected');
		});
	});
};
