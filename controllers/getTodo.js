const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try{
        const Todos = await Todo.find({});
        res.status(200).json(
            {
                success : true,
                data : Todos,
                message : 'Todos fetched successfully'
            }
        )
    }
    catch(err){
        console.log("error fetching todos")
        res.status(500).json(
            {
                success : false,
                message : err.message
            }
        )
    }
}