const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const app = express();

// CORS 미들웨어 사용
// app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// API 엔드포인트 - 현재 주식 시세
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Stock.html');
});

// WebSocket 연결 시 발생하는 이벤트 처리
wss.on('connection', (ws) => {
  console.log('Client connected');

  // 0.3초마다 주식 시세 업데이트 및 클라이언트에 전송
  const interval = setInterval(() => {
    const stock = generateRandomStockData();
    ws.send(JSON.stringify(stock));
  }, 300);

  // 클라이언트와의 연결이 종료됐을 때 처리
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

// 랜덤 주식 생성
function generateRandomStockData() {
  const symbols = ['애플', '삼성', '테슬라','LG','블리자드','넥슨','다이소','하이닉스','MSI','인텔','AMD'];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const price = Math.random() * 1000;
  return { symbol: randomSymbol, price: price.toFixed(2) };
}

// 서버 시작 포트 3333
const port = 3333;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
