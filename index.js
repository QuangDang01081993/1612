var express = require('express');
var app = express();
app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000,() => console.log('sevet is running'));
var arrRoom =['Hoc tap','Kinh te','An choi','Chung khoan','Giai Tri'];
app.get('/',(req,res) =>{
  res.render('home', {arrRoom});
});
io.on('connection', socket => {
  console.log('co nguoi ket noi');
});
