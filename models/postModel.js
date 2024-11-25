const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        require:true
    },
    
}); 

module.exports=mongoose.model('Post',postSchema);