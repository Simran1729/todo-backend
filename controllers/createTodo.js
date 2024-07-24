//importing the model
const Todo = require('../models/Todo');

//defining route handler - making it async, as it requires to interact with db

exports.createTodo = async(req, res) => {
    try{
        const {title, description} =  req.body;
        const response = await Todo.create({title, description});
        res.status(200).json(
            {
                succses: true,
                data : response, 
                message : "Creation sucessful",
            }
        )

    } catch(error){
        console.log(error.message);
        res.status(500).json(
            {
                succses : false,
                data : 'internal server error',
                message : error.message,
            }
        )

    }
}