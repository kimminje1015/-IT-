 const answer = `Node.js 에서 worker_threads 모듈을 사용하면 하위스레드를 처리할수고 cluster모듈을 사용하면 멀티 스레드가 지원된다.` ;
const {
    Worker, isMainThread, parentPort,
  } = require('worker_threads');
  
  if (isMainThread) { // 부모일 때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
  } else { // 워커일 때
    parentPort.on('message', (value) => {
      console.log('from parent', value);
      parentPort.postMessage('pong');
      parentPort.close();
    });
  }
  
console.log(answer);