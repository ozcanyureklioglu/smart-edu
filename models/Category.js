const mongoose=require('mongoose');
const slugify=require('slugify');
const schema=mongoose.Schema;


const categoryShema=new schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    
    slug:{
        type:String,
        unique:true
    }
});

categoryShema.pre('validate',function(next){
    this.slug=slugify(this.name,{
        lower:true,
        strict:true
    });
    next();
});
const Category=mongoose.model('Category',categoryShema);
module.exports=Category;


