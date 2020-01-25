const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRound = 10;

const Schema = mongoose.Schema;

const parentSchema = new Schema({
    parentName: String,
    nic: String,
    address: String,
    email: String,
    password: String,
    status: Number
    
});

// parentSchema.pre('save',(next)=>{
//     console.log("password " + this.password);
//     bcrypt.genSalt(10, (err, salt)=>{
//         bcrypt.hash(this.password, salt, (err, hash)=>{
//             if(err){
//                 console.log("Error : " + err);
//             }else{
//                 this.password = hash;
//                 this.saltSecret = salt;
//                 next();
//             }
            
//         })
//     });
// });

// parentSchema.pre('save', (next)=>{
//     this.password = bcrypt.hashSync(this.password, saltRound);
//     next();
// });


module.exports = mongoose.model('Parent', parentSchema, "Parent");