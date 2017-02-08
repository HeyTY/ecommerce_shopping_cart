var express		= require('express');
var router 		= express.Router();
var Product 	= require("../models/product");




/* GET home page. */
router.get("/", function(req, res, next) {
	Product.find({}, function (err, allProducts){
		if (err) {
			console.log(err);
		} else {
			res.render("shop/index", {allProducts: allProducts})
		}
	});
});





module.exports = router;


// router.get('/', function(req, res, next) {
// 	Product.find(function(err, docs) {
// 		res.render('shop/index', { title: 'Shopping App', products: docs});
// 	});
// });


