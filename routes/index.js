'use strict';
var express = require('express');
var router = express.Router();
var client = require('../db/index');

// a reusable function
function respondWithAllTweets (req, res, next) { console.log("hello");
  client.query('SELECT * FROM tweets', function (err, result) { console.log('hello');
    if (err) {
    console.log(err); 
    return next(err);
    } // pass errors to Express
    var tweets = result.rows;
    res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
  });
}

// here we basically treet the root view and tweets view as identical
router.get('/', respondWithAllTweets);

module.exports = router;
