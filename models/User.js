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
    },
    role:{
        type: String,
        enum:['Student','Teacher','Admin']
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

userShema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

const User=mongoose.model('User',userShema);
module.exports=User;


