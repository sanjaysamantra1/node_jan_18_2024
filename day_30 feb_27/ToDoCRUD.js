const express = require('express');
const app = express();
app.use(express.json());

let todos = [
    { id: 1, text: 'ToDo -1', completed: true },
    { id: 2, text: 'ToDo -2', completed: false },
    { id: 3, text: 'ToDo -3', completed: true },
]

app.get('/todos', (req, res) => {
    console.log("I am get route for todos")
    res.status(200).json(todos)
})
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo.id === +req.params.id)
    res.status(200).json(todo)
})
app.post('/todos', (req, res) => {
    todos.push(req.body)
    res.status(201).json({ msg: 'Todo Added Successfully!!' })
})
app.put('/todos/:id', jsonMiddleware, (req, res) => {
    const todo = todos.find(todo => todo.id === +req.params.id);
    if (todo) {
        const { id, text, completed } = req.body;
        todo.id = id;
        todo.text = text;
        todo.completed = completed;
        res.status(200).json({ msg: 'ToDo Updated successfully!!' })
    } else {
        res.status(404).json({ msg: 'ToDo Not Found' })
    }
})
app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(todo => todo.id === +req.params.id);
    if (todoIndex) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ msg: 'ToDo Dleted successfully!!' })
    } else {
        res.status(404).json({ msg: 'ToDo Not Found' })
    }
})

app.listen(5000, () => { console.log('Server Running on port 5000') });