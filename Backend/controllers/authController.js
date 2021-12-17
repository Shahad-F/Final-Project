const User = require('../models/User')
// handel errors

const handelErrors = (err)=>{
    console.log(err.message,err.code);
    let errors = {email:'' ,password:''};

    
   // duplicate error code
   if (err.code ===11000){
       errors.email = "that email is alredy registered";
       return errors;
   }

    // validation errors
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.login_get =(req, res)=>{
    User.find({})
    .then(user=>{
        res.json(user);
    })
    .catch(err=>{
        res.json({err:err});
    })
}

module.exports.signup_get =(req, res)=>{
    User.find({})
    .then(user=>{
        res.json(user);
    })
    .catch(err=>{
        res.json({err:err});
    })
}

// module.exports.signup_get =(req, res)=>{

//     res.render('signup');
// }

// module.exports.login_get =(req, res)=>{

//     res.render('login');
// }

module.exports.signup_post = async (req, res)=>{
const {email,password} =req.body;
 
try{
   const user = await User.create({email,password});
 res.status(201).json(user);
}
catch(err){
  const errors=  handelErrors(err);
  res.status(400).json({errors});
 }
}

module.exports.login_post = async(req, res)=>{
const {email ,password} =req.body;
console.log(email,password)
    res.send(' user login');
}