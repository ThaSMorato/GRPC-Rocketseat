const grpc = require('grpc');
const path = require('path');

const AuthorsDefinition = grpc.load(path.resolve(__dirname,'../proto/authors.proto'));
const AuthorHandler = require('./handlers/AuthorHandler');

const server = new grpc.Server()

server.addService(AuthorsDefinition.AuthorService.service, AuthorHandler)

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('listeningg');
server.start();