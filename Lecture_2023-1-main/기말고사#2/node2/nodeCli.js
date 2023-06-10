#!/usr/bin/env node
//node 경로 맥or리눅스

const fs = require('fs');
const readline = require('readline');

//stdin 터미널에서 입력
//stdout 터미널에서 결과 출력
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//날짜 구하기
let today = new Date();   
let year = today.getFullYear();     // 년도
let month = today.getMonth() + 1;   // 월
let date = today.getDate();         // 날짜

const todayListFileName = '오늘의 할일(' + year + '.' + month + '.' + date + ').txt';

//콘솔 지우기
console.clear();

function displayMenu() {
  console.log('===== 오늘의 할일 목록 관리 프로그램 =====');
  console.log('1. 오늘의 할일 추가');
  console.log('2. 오늘의 할일 목록 보기');
  console.log('3. 오늘의 할일 삭제');
  console.log('4. 콘솔 내용 지우기');
  console.log('5. 종료');
}

//오늘 할 목록 추가
function addTodayItem(todayItem) {
  fs.readFile(todayListFileName, 'utf8', (err, data) => {
    if(data === '')
    {
      fs.appendFile(todayListFileName, `${todayItem}`, (err) => {
        if (err) {
          console.error('오늘의 할일을 추가하는 도중 오류가 발생했습니다.', err);
          console.log(`===================================`);
        }
        else {
          console.log(`[${todayItem}] 오늘의 할일이 추가되었습니다.`);
          console.log(`===================================`);
        }
        displayMenu();
        askUser();
      });
    }
    else
    {
      fs.appendFile(todayListFileName, `\n${todayItem}`, (err) => {
        if (err) {
          console.error('오늘의 할일을 추가하는 도중 오류가 발생했습니다.', err);
          console.log(`===================================`);
        }
        else {
          console.log(`[${todayItem}] 오늘의 할일이 추가되었습니다.`);
          console.log(`===================================`);
        }
        displayMenu();
        askUser();
      });
    }
  });
}

//오늘 할 목록 보기
function displayTodayList() {
  fs.readFile(todayListFileName, 'utf8', (err, data) => {
    if (err) {
      console.error('오늘의 할일 목록을 읽어오는 도중 오류가 발생했습니다.', err);
      console.log(`===================================`);
    } else {
      if (data.trim() === '') {
        console.log('오늘의 할일은 없습니다.');
        console.log(`===================================`);
      } else {
        const todayList = data.split('\n');
        console.log('===== 오늘의 할일 목록 =====');
        todayList.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      }
    }
    displayMenu();
    askUser();
  });
}

//목록 삭제
function deletetodayItem(index) {
  fs.readFile(todayListFileName, 'utf8', (err, data) => {
    if (err) {
      console.error('오늘의 할일 목록을 읽어오는 도중 오류가 발생했습니다.', err);
      console.log(`===================================`);
    } else {
      const todayList = data.split('\n');
      if (index >= 1 && index <= todayList.length) {
        const deletedItem = todayList.splice(index - 1, 1);
        fs.writeFile(todayListFileName, todayList.join('\n'), (err) => {
          if (err) {
            console.error('할일을 삭제하는 도중 오류가 발생했습니다.', err);
            console.log(`===================================`);
          } else {
            console.log(`[${deletedItem}] 할일이 삭제되었습니다.`);
            console.log(`===================================`);
          }
          displayMenu();
          askUser();
        });
      } else {
        console.log('올바른 번호를 입력하세요.');
        displayMenu();
        askUser();
      }
    }
  });
}


//오늘 할 목록 보기
function deletetDisplayTodayList() {
  fs.readFile(todayListFileName, 'utf8', (err, data) => {
    if (err) {
      console.error('오늘의 할일 목록을 읽어오는 도중 오류가 발생했습니다.', err);
      console.log(`===================================`);
    } else {
      if (data.trim() === '') {
        console.log('삭제할 오늘의 할일이 없습니다.');
        console.log(`===================================`);
        displayMenu();
        askUser();
      } else {
        const todayList = data.split('\n');
        console.log('===== 오늘의 할일 목록 =====');
        todayList.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
        rl.question('삭제할 오늘의 할일 번호를 입력하세요: ', (index) => {
          deletetodayItem(parseInt(index));
        });
      }
    }
  });
}

function clearDisplayTodayList(){
  console.clear();
  displayMenu();
  askUser();
}

//작업 선택
function askUser() {
    rl.question('원하는 작업을 선택하세요: ', (choice) => {
      switch (choice) {
        case '1':
          rl.question('추가할 할일을 입력하세요: ', (todayItem) => {
            if(todayItem.trim() === '')
            {
              console.log('입력된 값이 없습니다.');
              displayMenu();
              askUser();
            }
            else{
              addTodayItem(todayItem);
            }
          });
          break;
        case '2':
          displayTodayList();
          break;
        case '3':
          deletetDisplayTodayList();
          break;
        case '4':
          clearDisplayTodayList();
          break;
        case '5':
          rl.close();
          console.clear();
          break;
        default:
          console.log('올바른 선택지를 입력하세요.');
          displayMenu();
          askUser();
      }
    });
  }

// 메인 로직
fs.access(todayListFileName, fs.constants.F_OK, (err) => {
  if (err) {
    // 오늘의 할일(Date).txt 파일이 없는 경우 파일을 생성합니다.
    fs.writeFile(todayListFileName, '', (err) => {
      if (err) {
        console.error('오늘의 할일 목록 파일을 생성하는 도중 오류가 발생했습니다.', err);
      }
      displayMenu();
      askUser();
    });
  } else {
    displayMenu();
    askUser();
  }
});
