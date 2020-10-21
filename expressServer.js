const express = require('express')
const app = express()

app.set('views', __dirname + '/views');
//뷰 파일이 있는 디렉토리를 지정합니다.
app.set('view engine', 'ejs');
//여러가지 뷰 엔진중에서 ejs 를 사용하겠다 

app.use(express.json());
//json 형태의 데이터 전송을 허용하겠다
app.use(express.urlencoded({extended : false}));
//urlencoded 형식의 데이터 전송을 허용하겠다

app.use(express.static(__dirname + '/public'));
//정적 파일(디자인플러그인 등)을 사용하기 위한 폴더 설정
//공개하는거
//공개 안하면 사진 아무것도 안보임

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.render('test');
})

app.get('/ejsTest', function(req, res){
    res.render('ejsTest'); //보여주는거는 render 
})

app.get('/getData', function(req, res){
    console.log(req.body);
    var getUserId = req.body.sendUserId;
    var getUserPassword = req.body.sendUserPassword;
    console.log(getUserId, getUserPassword);
    res.json(1)
}) //받을준비. request의 body안에 있는 senduserId
   //test.ejs와 연결됨

app.listen(3000)
