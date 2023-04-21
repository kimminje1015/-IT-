
var answer = '이벤트 생성전'
const EventEmitter = require('events');
const myEvent = new EventEmitter();	//EventEmitter객체 생성

//이벤트 만드는 방법
myEvent.on('event1', () => {
    answer += 'myEvent.emit로 이벤트 실행  이벤트 1 생성 완료'
});

function aa(){
    myEvent.emit('event1'); // 이벤트 실행
    answer += '이벤트 테스트'
    console.log(answer);
}

aa()