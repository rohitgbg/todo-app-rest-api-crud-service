const Todo = require('../models/todo.model.js');

//create note
exports.create = (req, res) => {

    const title = req.body.title;
    const content = req.body.content;

    if (!title || !content) {
        return res.status(400).send({
            status: res.statusCode,
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
                status: res.statusCode,
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
                status: res.statusCode,
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
                status: res.statusCode,
                message: "Error occured"
            })
        })
};

//update note
exports.update = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    if (!title || !content) {
        return res.status(400).send({
            status: res.statusCode,
            message: "Title and Content can not be empty"
        })
    }

    Todo.findByIdAndUpdate(req.params.todoId, {
            title: title,
            content: content
        }, {
            new: true
        })

        .then(todo => {
            if (!todo) {
                return res.status(404).send({
                    status: statusCode,
                    message: "Note not found with id " + req.params.todoId
                });
            }
            res.send(todo);
        })
        .catch(error => {
            if (error.kind === 'ObjectId') {
                return res.status(404).send({
                    status: statusCode,
                    message: "Note not found with id " + req.params.todoId
                });
            }
            return res.status(500).send({
                status: statusCode,
                message: "Error updating note with id " + req.params.todoId
            });
        });
};

//delete note
exports.delete = (req, res) => {
    Todo.findByIdAndRemove(req.params.todoId)
        .then(todo => {
            if (!todo) {
                return res.status(400).send({
                    status: statusCode,
                    message: "Note not found with id " + req.params.todoId
                })
            }
            res.send({
                status: statusCode,
                message: `Note with id ${req.params.todoId} successfully deleted`
            })
        })
        .catch(error => {
            if (error.kind == "ObjectId" || error.name == "Not found") {
                return res.status(404).send({
                    status: statusCode,
                    message: "Note not found with id " + req.params.todoId
                })

                return res.status(500).send({
                    status: statusCode,
                    message: "Could not delete note with id " + req.params.todoId
                });
            }
        })
}