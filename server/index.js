const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //클라이언트로부터 데이터를 쉽게(잘묶여서) 받기 위함
//urlencoded => 모듈 사용 관련 (사용x)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/api/data", (req, res) => {
  console.log(req.body);
  res.json({ name: "junseok" });
});

app.listen(5000, () => {
  console.log("현재 포트번호 5000번 잘 작동 중");
});

//res.send("안녕하세요"); //res는 서버가 클라이언트에게
//localhost:5000/home 일 때
