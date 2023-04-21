var calc = require("./calc");

// import { now } from "./time.js";
const answer = `node는 CommonJS와 ES모듈이 있는데 CommonJS는 require를 사용하고 ES는 import를 사용한다
${calc.add(3,5)}`;

console.log(answer);