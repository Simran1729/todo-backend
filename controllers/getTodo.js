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

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Todo.findById(id);

        if(!response){
            res.status(404).json(
                {
                    success : false,
                    message : "No todo found"
                }
            )
        }

        res.status(200).json({
            success : true,
            data : response,
            message : "Todo fetched successfully"
        })
    }
    catch (err){
        console.log("error fetching todo");
        res.status(500).json(
            {
                success : false,
                message : err.message
            }
        )

    }
}