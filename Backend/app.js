let express =require('express')
const cors = require('cors')
let mongoose = require('mongoose'),


app= express()

const router = require('./routes/index')
const authRoutes = require('./routes/authRoutes')
app.use(cors())

const Admin = require('./models/Admen')
const Provider = require('./models/ProvidorS')
// const User = require('./models/User')

const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://shahad:Shd2020Shd@cluster0.cdkwi.mongodb.net/test',{
    useUnifiedTopology:true,
    useNewUrlParser:true
});


// app.use(cookieParser('myadmin'))
// app.use(expressSession({

//     secret: 'myadmin',
//     saveUninitialized:true,
//     resave:true,
//     cookie:{maxAge : 6000}  
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(Admin.createStrategy())
// passport.serializeUser(Admin.serializeUser())
// passport.deserializeUser(Admin.deserializeUser())
// // 
// passport.use(Provider.createStrategy())
// passport.serializeUser(Provider.serializeUser())
// passport.deserializeUser(Provider.deserializeUser())
// 
// passport.use(User.createStrategy())
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())



app.use(express.json());
app.use(cookieParser());
app.use('/',router)
app.use(authRoutes)


// // cookies
// app.get('/set-cookies',(req,res)=>{
// // res.setHeader('Set-Cookie','newUser=true');

// res.cookie('newUser',false);
// res.cookie('isEmployee',true,{maxAge:1000*60*60*24 ,httpOnly:true});
// res.send('you got the cookies !');

// });

// app.get('/read-cookie',(req,res)=>{

// const cookies = req.cookies;
// console.log(cookies.newUser);
// res.json(cookies);
// });

app.listen(3030,()=>{
    console.log('express has started !')
})