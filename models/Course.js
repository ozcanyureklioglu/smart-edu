const mongoose=require('mongoose');
const slugify=require('slugify');
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
    },
    slug:{
        type:String,
        unique:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

courseShema.pre('validate',function(next){
    this.slug=slugify(this.name,{
        lower:true,
        strict:true
    });
    next();
});
const Course=mongoose.model('Course',courseShema);
module.exports=Course;


