const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));

let server = app.listen(1020, () => {
    console.log("Dewi Booking Runing on 1020");
});

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getPassowrd', (req, res) => {
    //res.render('index');
});

app.post('/storePassword', (req, res) => {
    console.log("form data", req.body.username);
    res.send(req.body);
});