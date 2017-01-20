var express = require('express');
var router = express.Router();

var futapi = require("fut-api");
var apiClient = new futapi();
var url = require('url');
var http = require('http');


function twoFactorCodeCb(next){
    /* send your authentication code with the "next" method */
    next("123456");
}

router.get('/login', function(req,res,next){
    var queryData = url.parse(req.url,true).query;
    var email = queryData.email;
    var password = queryData.password;
    var code;
    console.log('code is ' + code);
    if(queryData.code){
        code = queryData.code;
    } else {
        code = '';
    }

    console.log("trying to log in with " + email + " " + code);


    var tfcc =  function(next){
        next(code);
    }

    apiClient.login(email,password,"waikare", "ps4",
        tfcc,
        function(error,response){
            if(error) {
                var fakeJson = '{"loginResult" : "false"}';
                res.send(fakeJson);
                console.log(error);
                return console.log("Unable to login.");

            }
            console.log("logged in");
            var fakeJson = '{"loginResult" : "true"}';
            console.log(fakeJson);
            res.send(fakeJson);


            // apiClient.getCredits(function(error, response){
            // });

        });
});






/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('getting default');
      res.render('index', { title: 'API is UP' });
});

/* GET home page. */
router.get('/index.html', function(req, res, next) {
    console.log('getting index');
    res.render('index', { title: 'API is UP' });
});

/* GET home page. */
router.get('/static/index.html', function(req, res, next) {
    console.log('trying to serve @ ' + path.join(__dirname,'index.html'));
    res.sendFile(path.join(__dirname,'index.html'), { title: 'api'});
});

/* GET home page. */
router.get('/other', function(req, res, next) {
    console.log('other');
    res.send('hello other');
});

/* GET credits from api. */
router.get('/getcredits', function(req, res, next) {
    apiClient.getCredits(function(error, response){
        if(error){
            console.log(error);
            res.send(error);
        } else {
            res.send(response);
        }
    });
});

/* GET credits from api. */
router.get('/gettradepile', function(req, res, next) {

    console.log('fetching trade pile');

    apiClient.getTradepile(function(error, response){
        if(error){
            console.log(error);
            res.send(error);
        } else {
            res.send(response);
        }
    });
});


router.get('/playerinfo', function(req,res,next){

    console.log("fetching individual player info");
    var queryData = url.parse(req.url,true).query;
    var id = queryData.id;

    http.get('http://www.easports.com/fifa/ultimate-team/api/fut/item?id=' +id, function(err,data){
        if(err){
            console.log(err);
            res.send("error");
        } else {
            console.log(data);
            res.send(data);
        }
    });
});


router.get('/transfermarketsearch', function(req,res,next){

});


module.exports = router;
