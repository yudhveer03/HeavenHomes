if (process.env.NODE_ENV != 'production') {
    require('dotenv').config() 
}

console.log("CLOUD_NAME =", process.env.CLOUD_NAME);
console.log("CLOUD_API_KEY =", process.env.CLOUD_API_KEY);
console.log("CLOUD_API_SECRET =", process.env.CLOUD_API_SECRET);


const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Listing = require('./model/listing.js')
const path = require("path")
const methodOverride = require('method-override')
const ejsmate = require('ejs-mate')
const wrapAsync = require('./utils/wrapAsync.js')
const ExpressError = require('./utils/ExpressError.js')
const sessions = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./model/user.js')



const listingsRouter = require("./routes/listing.js")
const reviewsRouter = require("./routes/review.js")
const { register } = require("module")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));
app.engine('ejs', ejsmate)




const Mongo_url = 'mongodb://127.0.0.1:27017/WanderLust'





main()
.then(() => {
    console.log("Connection Successfull");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect(Mongo_url);
}




const sessionOption = {
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3,
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly:true
    }
}
 



// //Root Route
// app.get("/", (req, res) => {
// res. send("You are at  root")
// });



app.use(sessions(sessionOption))
app.use(flash())



app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser= req.user
    next()
})    



app.get("/demouser", async(req,res)=> {
    let fakeuser = new User({
        email: "student@gmail.com",
        username: "student"
    });

    let registeredUser = await User.register(fakeuser, 'helloworld')  //Check krta ha ki DB me username unique ha kya nhi
    res.send(registeredUser)
})
 


app.use('/listings', listingsRouter);   
app.use('/listings/:id/reviews', reviewsRouter );   
const userRouter = require("./routes/user.js")
app.use("/", userRouter);



app.use((req, res, next) => {
    next(new ExpressError(404, 'Page not Found'))
})



app.use((err, req, res, next) => {
    let { statusCode, message } = err;
    res.render('error.ejs', { message })
    
})




app.listen(8000, () => {
    console.log("Server started on 8000")
})