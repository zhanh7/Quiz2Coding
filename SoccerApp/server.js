const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


let url = 'mongodb+srv://zhanh:16986292@cluster0.6laxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(path.join(__dirname, 'soccerApp/dist/soccerApp')))

app.post('/addLike', function (req, res) {
    db.collection('PeopleFollowed').insertOne(req.body);
    res.send(JSON.stringify(req.body));
});

app.get('/getLike', function (req, res) {
    db.collection('PeopleFollowed').find({}).toArray().then(function(results) {
        res.status(200).json(results);
    });
});



app.get('/', (req, res) => {
    res.redirect('/home.component.html')
})

app.listen(port, () => {
    console.log('Listening on *:3000')
})
