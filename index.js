const express = require('express'); // 설치한 express module 콜
const app = express(); // express 실행 및 app object 초기화

// '\'위치에 get 요청을 받으면 'Hello World!' 보내기
app.get('/', function(req, res){
  res.send('Hello World!');
});

//사용할 포트 번호 3000
const port = 3000;

//서버가 실행되는 경우 콘솔창에 띄우기
app.listen(port, function(){
  console.log('서버가 열렸습니다!!! http://localhost:'+ port);
});
