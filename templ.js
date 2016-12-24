var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine','ejs');
app.set('views',path.resolve('view'));
var users =[];
app.use(bodyParser.urlencoded({extended:true}));



app.get('/signup',function(req,res){
res.render('signup',{title:'注册'});
});
app.post('/add',function(req,res){
    users.push(req.body);
    console.log(req.body);
    res.redirect('/signin')

});
app.get('/signin',function(req,res){
    res.render('signin',{title:'登录'});
});


app.post('/ass',function(req,res){
    console.log(req.body);
    var flag =users.find(function (item) {
        return item.name == req.body.name&&item.password ==req.body.password;
    });
    if(flag){
        res.render('welcome',{title:'欢迎'});
    }else {
        res.render('signin',{title:'登录'});
    }


});



app.listen(8088,function(){
    console.log('server is success,listing on 8088 port!!!')
});