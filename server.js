var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    app = express(),
    port = 8080;


app.use(cors());
app.use(session({
    secret: 'cDevMountainIsfuLLofSecrets',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var data =
    [
        {
            "name": "photo 1",
            "link": "http://i.imgur.com/0UOYLTZ.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 1


        },
        {
            "name": "photo 2",
            link: "http://i.imgur.com/AlDzXSi.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 2

        },
        {
            "name": "photo 3",
            "link": "http://i.imgur.com/gwruPpE.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 3


        },
        {
            "name": "photo 4",
            "link": "http://i.imgur.com/MjSx16d.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 4

        },
        {
            "name": "photo 5",
            "link": "http://i.imgur.com/I5VBsEJ.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 5

        },
        {
            "name": "photo 6",
            "link": "http://i.imgur.com/aPYzEIT.png",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 6

        },
        {
            "name": "photo 7",
            "link": "http://i.imgur.com/k2bC3m9.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 7

        },
        {
            "name": "photo 8",
            "link": "http://i.imgur.com/lCjlK37.jpg",
            "desc": "Skateboard kitsch celiac helvetica.Stumptown portland kogi,narwhal farm-to-table readymade",
            "id" : 8

        }

    ];

var userInfo =  {
        username : "Carly Rally",
        intro: "I'm Carly, and I blog about life",
        image: "http://i.imgur.com/tTokmsE.jpg"

    };

app.get('/api/blogData', function(req, res) {
    console.log('someone hit our route');
    res.send(data);
});

app.get('/api/userInfo', function(req, res) {
console.log('someone hit the userInfo api');
    res.send(userInfo);
});




app.listen(port, function () {
    console.log('Listening on port', port);
});



