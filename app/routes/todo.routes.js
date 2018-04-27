module.exports = (app) =>{

    const todos = require('../controllers/todo.controller.js');

    //route for creating note POST method
    app.post('/todos', todos.create);

    //route for retrieving 
    app.get('/todos', todos.findAll);

    //route for retrieving note by its id
    app.get('/todos/:todoId', todos.findOne);

}