const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: { type: String, required: true }
});
const users=mongoose.model("usersdata",userSchema);

module.exports={
    users
};