let express =require('express')
const cors = require('cors')
let mongoose = require('mongoose'),


app= express()
app.use(express.json())
const router = require('./routes/index')

 
app.use(cors())

 

const expressSession = require('express-session')
const cookieParser = require('cookie-parser')

const passport = require('passport');
 
 

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://shahad:Shd2020Shd@cluster0.cdkwi.mongodb.net/test',{
    useUnifiedTopology:true,
    useNewUrlParser:true
});


app.use(cookieParser('myadmin'))
app.use(expressSession({

    secret: 'myadmin',
    saveUninitialized:true,
    resave:true,
    cookie:{maxAge : 6000}  
}))

app.use(passport.initialize())
app.use(passport.session())

 
 
 
app.use(express.json());
 
app.use('/',router)
 

app.listen(3030,()=>{
    console.log('express has started !')
})