const answer = `주석된 코드실행 결과는 localhost:3000포트에 연결되고 Hello World\n으로 응답을 마무리한다.
HTTP 서버가 만들어짐 `;
var http = require("http");
const fs = require('fs').promises;
const aa = document.getElementById('aa');
aa.innerHTML = answer;

// http.createServer(function (request,response){
//     response.writeHead(200,{'Content-Type': 'text/plain;'});
//     response.end('Hello World\n');
// }).listen(3000);

http.createServer(async (request,response) =>{
    try {
    const data = await fs.readFile('./04.html');
    response.writeHead(200,{'Content-Type': 'text/plain;'});
    response.end(data);
    }
    catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
      }
}).listen(3000);

