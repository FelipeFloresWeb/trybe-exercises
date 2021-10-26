module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);

    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

    socket.on('likePost', () => {
      console.log(`${socket.id} emitiu um like!`);
      // io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};