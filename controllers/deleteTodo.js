const Todo = require('../models/Todo');

exports.deleteTodo = async (req,res) => {
    try{
        const id = req.params.id;
        const resp = await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success : true,
                data : resp,
                message : "deleted successfully"
            }
        )
    } 
    catch(err){
        console.log("error deleting");
        res.status(500).json(
            {
                success: false,
                message : "Internal server error"
            }
        )
    }
}