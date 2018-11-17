var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var User = require('./models/User.js');
var Post = require('./Models/Post.js')
var auth = require('./auth.js')

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
    var author = req.params.id;
    var posts = await Post.find({author});
    res.send(posts);
});

app.post('/post', (req, res) => {
    var postData = req.body;
    postData.author = "5bef4eabc6116b4468e9cf45"

    var post = new Post(postData);

    post.save((err, res) => {
        if(err) {
            console.error('saving post error');
            return res.sendStatus(500).send({message: 'saving post error'});
        }
    });
    res.sendStatus(200);
})

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-pwd -__v');
        res.send(users);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v');
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

mongoose.connect('mongodb://test:test123@ds155192.mlab.com:55192/pssocial', {useNewUrlParser: true},  (err) => {
    if(!err)
        console.log('connected to mongo')
});

app.use('/auth', auth)
app.listen(3000);