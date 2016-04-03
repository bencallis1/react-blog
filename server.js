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
            "link": "http://i.imgur.com/11Llp8Q.png"


        },
        {
            "name": "photo 2",
            link: "http://i.imgur.com/qnrZywz.png"

        },
        {
            "name": "photo 3",
            "link": "http://i.imgur.com/n6L7NHH.png"


        },
        {
            "name": "photo 4",
            "link": "http://i.imgur.com/MLC2rKT.png"

        },
        {
            "name": "photo 5",
            "link": "http://i.imgur.com/11Llp8Q.png"

        },
        {
            "name": "photo 6",
            "link": "http://i.imgur.com/QT0BNBP.png"

        },
        {
            "name": "photo 7",
            "link": "http://i.imgur.com/YN0TWva.png"

        },
        {
            "name": "photo 8",
            "link": "http://i.imgur.com/Yfi5mUk.png"

        },
        {
            "name": "photo 9",
            "link": "http://i.imgur.com/lgwnPrn.png"

        },
        {
            "name": "photo 10",
            "link": "http://i.imgur.com/tblnRoN.png"

        },
        {
            "name": "photo 11",
            "link": "http://i.imgur.com/24XSc6v.png"

        },
        {
            "name": "photo 12",
            "link": "http://i.imgur.com/QWXjj9r.png"

        }


    ];



app.get('/api/blogData', function(req, res) {
    console.log('someone hit our route');
    res.send(data);
});


app.listen(port, function () {
    console.log('Listening on port', port);
});



