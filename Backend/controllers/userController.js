const User = require("../models/User");

const jwt = require('jsonwebtoken')

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };
    //incorrect email
    if(err.message==="incorrect email"){
        errors.email = "that email not registered"
    }
    //incorrect password
    if(err.message==="incorrect password"){
        errors.password = "that password is incorrect"
    }
  // duplicate error code 
  if(err.code === 11000){
    errors.email ="the email is already registered";
    return errors;
  }
  //validate errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({properties}) => {
      console.log(properties);
      errors[properties.path]= properties.message
    });
  }
  return errors;
};
//
const maxAge= 3*24*60*60
const createToken = (id)=>{
    return jwt.sign({id},'hnoohSecret',{
        expiresIn: maxAge
    })
} 

module.exports.signup_post = async (req, res) => {
  const { fullName,userName,image ,phone,email,password} = req.body;
  console.log(req.body)
  try {
    const user = await User.create({ email, password,fullName,userName,image ,phone });
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true,maxAge:maxAge*1000});
    res.status(201).json({user: token});
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({errors});
  } 
};

module.exports.signin_post = async (req, res) => {
  const { email, password } = req.body;
  try{
    const user= await User.login(email, password);
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true,maxAge:maxAge*1000});
    res.status(200).json({user: token});
    
}
  catch(err){
    const errors = handleErrors(err);
    res.status(400).json({errors});
  }
};
 