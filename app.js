const express = require('express');
const app = express();
const port = 3000;

// 정적리소스 디렉토리 설정 (localhost:3000/파일명)
app.use(express.static('public'))

// 라우터 설정
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})

// 서버실행: node app.js
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/* 
// CORS 미들웨어 등록
const cors = require("cors");

const whitelist = ["http://localhost:8080"];

const corsOptions = {
  origin: function (origin, callback) { 
    if (whitelist.indexOf(origin) !== -1) { // 만일 whitelist 배열에 origin인자가 있을 경우
      callback(null, true); // cors 허용
    } else {
      callback(new Error("Not Allowed Origin!")); // cors 비허용
    }
  },
};

app.use(cors(corsOptions));
*/
