const mongoose=require('mongoose');
const schema=mongoose.Schema;


const courseShema=new schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


const Course=mongoose.model('Course',courseShema);
module.exports=Course;


