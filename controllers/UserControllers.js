const bcrypt = require('bcrypt');
const User= require('../models/UserModel');


exports.signup = (req,res,next) =>{
    bcrypt.hash(req.body.password,8)
    .then (
        (hash) => {
            const user = new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:hash
            
            });

            
            user.save()
            .then(
                () => {
                    res.status(201).json({
                       message:"User added successfully",user
                    });
                }
            ).catch(
              (error) => {
                  res.status(500).json({
                      error:error
                  })
              }
            );
        }
    );
}
