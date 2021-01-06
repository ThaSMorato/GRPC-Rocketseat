const AuthorRepository = require('../data/AuthorRepository');

class AuthorController{

    constructor(){
        this.authorRepository = new AuthorRepository();
    }

    find(id){
        const author = this.authorRepository.findById(id);
        if(!author) throw new Error(`Author ${id} not found`);
        return author;
    }

    list(){
        return this.authorRepository.listAll();
    }

    create(params){
        const author = this.authorRepository.create(params);
        this.authorRepository.save()
        return author;
    }

    update(authorId, updateParams){
        this.find(authorId);
        const author = this.authorRepository.update(authorId, updateParams);
        this.authorRepository.save();
        return author;
    }

    delete(id){
        this.authorRepository.delete(id).save();
    }
}

module.exports = AuthorController;