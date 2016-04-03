var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    _ = require('lodash'),
    session = require('express-session'),
    config = require('./config'),
    cors = require('cors'),
    app = express(),
    port = 8080;



// TODO  express-session as middlware

//app.use(cors());

app.use(session({
    secret: config.server.secret,
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var products =
    [
        {
            "name": "Womens Watch",
            "image": "http://www.zappos.com/images/z/2/5/7/8/7/6/2578764-t-THUMBNAIL.jpg",
            "price": "44",
            "desc": "really awesome watch",
            "_id" : "11111100000000"

        },
        {
            "name": "Vans Shoes",
            "image": "http://www.zappos.com/images/z/3/2/6/8/2/5/326825-t-THUMBNAIL.jpg",
            "price": "65",
            "desc": "Great shoes for all year around",
            "_id" : "5553211000000001111111"

        },
        {
            "name": "Nixon watch",
            "image": "http://www.zappos.com/images/z/2/5/7/8/4/2/2578426-t-THUMBNAIL.jpg",
            "price": "265",
            "desc": "Awesome watch for guys",
            "_id" : "5435321100008983001111111"

        },
        {
            "name": "Neff",
            "image": "http://a2.zassets.com/images/z/1/7/6/7/9/7/1767977-p-LARGE_SEARCH.jpg",
            "price": "24",
            "desc": "Sweet beanie",
            "_id" : "77435321100000089111111"

        }

    ];


// TODO Create a post route that will add a item to cart. Use express-session to create the item

app.post('/api/cartDetails', function(req, res){
    var cartItem = req.body.cart;

    if (!req.session.cart) {
        req.session.cart = {}
    }

    for(var key in cartItem) {
        req.session.cart[key] = cartItem[key];
    }

    res.send(req.session.cart);

});



app.get('/api/getProductList', function(req, res) {
    res.send(products)
});


//Create a GET request that looks for a specific product id

app.get('/api/getProduct/:id', function(req, res) {
    var productIndex = _.findIndex(products, {_id: req.params.id});
    var item = products.slice(productIndex, productIndex + 1);
    res.json(item)

});

//Create a POST request that takes the product from body of the request and then pushes it to the products array

app.post('/api/getProductList', function(req, res) {
    var product = req.body;
    products.push(product);
    res.send(product);
});

//Create a PUT request that takes the product id from the req.params and updates that id with the id from the req body

app.put('/api/getProduct/:id', function(req, res) {
    var update = req.body,
        productIndex = _.findIndex(products, {_id: req.params.id});

    console.log(update);
    console.log(productIndex);

    if (!products[productIndex]) {
        res.send('nothing here');
    } else {
        var updatedProduct = _.assign(products[productIndex], update);
        res.json(updatedProduct);
    }

});


//Create a DELETE request that takes the product id from the req.params deletes it then returns the deleted item back in the response

app.delete('/api/getProduct/:id', function(req,res) {
    var  productIndex = _.findIndex(products, {_id: req.params.id});
    if(!products[productIndex]) {
        res.send('could not find that product to delete')
    } else {
        var deletedProduct = products[productIndex];
        products.splice(productIndex, 1);
        res.json(deletedProduct)
    }

});



app.listen(port, function () {
    console.log('Listening on port', port);
});



