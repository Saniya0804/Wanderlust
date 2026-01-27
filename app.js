if(process.env.NODE_ENV!="production")
{
require("dotenv").config();
}
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dburl=process.env.ATLASDB_URL;
const path=require('path');
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate');
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const MongoStore=require("connect-mongo");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
async function main(){
await mongoose.connect(dburl);
}
main().then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:",err);
});
app.engine('ejs',ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
const store=MongoStore.create({
    mongoUrl:dburl,
    crypto:{
secret:process.env.SESSION_SECRET
    },
    touchAfter:24*60*60
});
store.on("error",(err)=>{
    console.log("Error in session store",err);
})
const sessionOptions={
    store,
    name:"wanderlust-session",
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
res.locals.success=req.flash("success")||[];
res.locals.error=req.flash("error")||[];
res.locals.currUser=req.user;
next();
});

/*app.get("/demouser",async (req,res)=>{
let fakeUser=new User ({
    email:"student@gmail.com",
    username:"delta-student"
});
let registeredUser=await User.register(fakeUser,"helloworld");
res.send(registeredUser);
});*/
app.get("/", (req, res) => {
  res.send("Wanderlust backend running");
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.use((req, res,next) => {
  next(new ExpressError(404,"page not found"));
});

/*app.get("/",wrapAsync((req,res)=>{
    res.send("Hello I am root!");
}));*/

/*if by mistake user enter a invalid or random route*/
/*app.use((req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});*/
/*app.use((err,req,res,next)=>{
    if(res.headersSent)
        return next(err);
    console.log("🔥 ERROR NAME:", err.name);
    console.log("🔥 ERROR MESSAGE:", err.message);
    console.log("🔥 ERROR STACK:", err.stack);
    let {statusCode=500,message="something went wrong"}=err;
    return res.status(statusCode).render("listings/error",{message});
});*/
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  console.log("🔥 ERROR:", err);
  res.status(statusCode).render("listings/error", { message });
});
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
});



