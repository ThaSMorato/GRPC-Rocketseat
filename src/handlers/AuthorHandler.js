const AuthorController = new (require('../controllers/AuthorController'))();

function list (_, callback) {
    return callback(null, AuthorController.list());
}

function find ({request}, callback ){
    try{
        const author = AuthorController.find(request.id);
        return callback(null, author);
    }catch (error){
        return callback(error, null)
    }
}


function create ({request}, callback ){
    try{
        const author = AuthorController.find(request.id);
        return callback(null, author);
    }catch (error){
        return callback(error, null)
    }
}


function remove ({request}, callback ){
    
        return callback(null, AuthorController.delete(request.id));
 
}


function update ({request}, callback ){
  
        return callback(null, AuthorController.create(request));
   
}

module.exports = {
    find, list, create, remove, update
}