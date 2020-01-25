const mongoose = require('mongoose');
const Parent = require('../models/parent');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = (req, res, next) => {
    // Hashing password
    const hash = bcrypt.hashSync(req.body.password, 10);
    // console.log("Inside register function") 
    var parent = new Parent();
    parent.parentName = req.body.parentName;
    parent.nic = req.body.nic;
    parent.address = req.body.address;
    parent.email = req.body.email;
    parent.password = hash;
    parent.status = 0;

    parent.save((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.json(doc)
        }
    });

    console.log(parent);
}


// Login 
module.exports.login = (req, res, next) => {
    Parent.findOne({email:req.body.email},(err, parentinfo) =>{
        if(err){
            next(err);
        }else{
            if(bcrypt.compareSync(req.body.password, parentinfo.password )){
                const token = jwt.sign({id: parentinfo.id}, req.app.get('secretKey'), {expiresIn: '1h'});
                res.json({status: "success", message: "User Found !!", data:{user: parentinfo, token: token}});
            }
        }
    })
}