var express		= require('express');
var router 		= express.Router();
var csrf		= require("csurf");
var passport	= require("passport");

var csrfProtection = csrf();
router.use(csrfProtection);


router.get("/profile", isLoggedin , function (req, res, next){
	res.render("user/profile");
})

router.get("/logout", isLoggedin, function (req, res, next){
	req.logout();
	res.redirect("/");
});

router.use("/", notLoggedin, function (req, res, next){
	next();
});


router.get("/signup", function (req, res, next) {
	var messages = req.flash("error");
	res.render("user/signup", {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});


router.post("/signup", passport.authenticate("local.signup", {
	successRedirect: "/user/profile", 
	failureRedirect: "/user/signup",
	failureFlash: true
}));


router.get("/signin", function (req, res, next){
	var messages = req.flash("error");
	res.render("user/signin", {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});


router.post("/signin", passport.authenticate("local.signin", {
	successRedirect: "/user/profile", 
	failureRedirect: "/user/signin",
	failureFlash: true
}));


function isLoggedin (req,res,next) {
	if (req.isAuthenticated()){
		return next();
	}
	res.redirect("/user/signin");
}

function notLoggedin (req,res,next) {
	if (!req.isAuthenticated()){
		return next();
	}
	res.redirect("/");
}

module.exports = router;