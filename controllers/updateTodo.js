const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const resp = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt : Date.now()}
        )

        res.status(200).json(
            {
                success : true,
                data : resp,
                message : "updated successfully"
            }
        )
    }catch(err){
        console.log("error updating");
        res.status(500).json(
            {
                success: false,
                message : "Internal server error"
            }
        )
    }
}