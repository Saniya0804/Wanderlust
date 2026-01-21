const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");
const Schema=mongoose.Schema;
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
});
const plm = passportLocalMongoose && passportLocalMongoose.default ? passportLocalMongoose.default : passportLocalMongoose;
userSchema.plugin(plm);
module.exports=mongoose.model('User',userSchema);