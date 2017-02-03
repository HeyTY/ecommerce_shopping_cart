var mongoose 		= require("mongoose");
var Product 		= require("../models/product");


mongoose.connect("mongodb://localhost/shopping_app")


var products = [
	new Product({
		title: "Apple - MacBook® Pro - 13",
		image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13/gray/mbp13-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1477352401765",
		description: "2.0GHz dual-core Intel Core i5 processor, 8GB 1866MHz memory, 256GB SSD",
		price: 1499.99	
	}),
	new Product({
		title: "Apple - MacBook® Pro - 13 Touch Bar",
		image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13touch/gray/mbp13touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1477352392351",
		description: "2.0GHz dual-core Intel Core i5 processor, 8GB 1866MHz memory, 256GB SSD",
		price: 1799.99	
	}),
	new Product({
		title: "Apple - MacBook® Pro - 15 Touch Bar",
		image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1478283595345",
		description: "2.0GHz dual-core Intel Core i5 processor, 16GB 1866MHz memory, 256GB SSD",
		price: 2399.99	
	}),
	new Product({
		title: "Apple - MacBook Air®  - 13",
		image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/air/macbook-air-13-select-hero-201505?wid=265&hei=154&fmt=png-alpha&qlt=95&.v=1473964822799",
		description: "2.0GHz dual-core Intel Core i5 processor, 8GB 1866MHz memory, 256GB SSD",
		price: 1499.99	
	}),
	new Product({
		title: "Apple - 21.5-inch iMac with Retina 4K display",
		image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imac/4k/imac-4k-config-hero-201510?wid=627&hei=522&fmt=jpeg&qlt=95&.v=WUPk70",
		description: "2.0GHz dual-core Intel Core i5 processor, 8GB 1866MHz memory, 256GB SSD",
		price: 1499.99	
	}),
	new Product({
		title: "Apple - 27-inch iMac with Retina 5K display",
		image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imac/5k/imac-5k-config-hero-201505?wid=627&hei=522&fmt=jpeg&qlt=95&.v=4LTkD2",
		description: "2.0GHz dual-core Intel Core i5 processor, 8GB 1866MHz memory, 256GB SSD",
		price: 1999.99	
	}),
];

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length) {
			exit();
		}
	});
};

function exit () {
	mongoose.disconnect();
}
