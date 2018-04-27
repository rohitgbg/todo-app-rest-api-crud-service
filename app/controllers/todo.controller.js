const Todo = require('../models/todo.model.js');

const title = req.body.title;
const content = req.body.content;

//create note
exports.create = (req, res) => {
    if (!title || !content) {
        return res.status(400).send({
            message: "Title and Content can not be empty"
        })
    }
    const todo = new Todo({
        title: title,
        content: content
    });

    todo.save()

        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.status(500).send({
                message: "Error occured"
            })
        })

};

//find all notes
exports.findAll = (req, res) => {
    Todo.find()
        .then(result => {
            res.send(mytodos = {
                result
            });
        })
        .catch(error => {
            res.status(500).send({
                message: "Error occured"
            })
        })
};

//find note by its id
exports.findOne = (req, res) => {
    Todo.findById({
            _id: req.params.todoId
        })
        .then(result => {
            res.send(mytodos = {
                result
            });
        })
        .catch(error => {
            res.status(500).send({
                message: "Error occured"
            })
        })
};

//update note
exports.update = (req, res) => {
    
};