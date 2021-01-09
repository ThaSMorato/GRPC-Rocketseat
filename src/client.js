const { rejects } = require('assert');
const grpc = require('grpc');

const path = require('path');

const AuthorsDefinition = grpc.load( path.resolve(__dirname,'../proto/authors.proto'));
const AuthorClient = new AuthorsDefinition.AuthorService('localhost:50051', grpc.credentials.createInsecure());

function promisefy(method){
    return (params) => {
        return new Promise((resolve, rejects) => {
            AuthorClient[method](params, (err, response)=> {
                if(err) return rejects(err);
                return resolve(response);
            })
        })
    }
}

; (async () => {
    const Lucas = await promisefy('create')({name: "Lucas Santos", website: "io.lucas.dev"});
    console.log(Lucas);
})()