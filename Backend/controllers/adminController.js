const Admin = require("../models/Admen");

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
  if (err.message.includes("admin validation failed")) {
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
  const {  name, email,password} = req.body;
  console.log(req.body)
  try {
    const admin = await Admin.create({  email, password,name});
    const token = createToken(admin._id)
    res.cookie('jwt', token, {httpOnly: true,maxAge:maxAge*1000});
    res.status(201).json({ success:true,admin: token});
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({errors});
     
  } 
};

module.exports.signin_post = async (req, res) => {
  const { email, password } = req.body;
  try{
    const admin= await Admin.login(email, password);
    const token = createToken(admin._id)
     
    res.cookie('jwt', token, {httpOnly: true,maxAge:maxAge*1000});
    res.status(200).json({success:true,admin: token});
     
}
  catch(err){
    const errors = handleErrors(err);
    res.status(400).json({errors});
  }
};
 