//import the model
const Todo=require('../models/Todo');

//delete Todo
exports.deleteTodo=async(req,res)=>{
    try{
       const {id}=req.params;
       const todo=await Todo.findByIdAndDelete(id);
       res.status(200).json({
        success:true,
        message:"Deleted successfully"
    })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error",
        })
    }
}
