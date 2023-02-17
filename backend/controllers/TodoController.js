const TodoModel = require('../models/ToDoModel')
const ToDoModel = require('../models/ToDoModel')

module.exports.getTodo = async(req, res)=>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async(req, res)=>{

    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("added successfully")
        console.log(data)
        res.send(data)
    })
}

module.exports.updateToDo = async(req, res)=>{
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Updated SuccessFuly..."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async(req,res) => {
    const {_id } = req.body
    TodoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}