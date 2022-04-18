const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const schema=mongoose.Schema;


const userShema=new schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

userShema.pre('save',function(next){
    const user=this;
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password=hash;
        next();
    })

});

const User=mongoose.model('User',userShema);
module.exports=User;

