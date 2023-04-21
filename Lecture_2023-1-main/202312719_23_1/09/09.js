function aa(a){
    console.log("실행" + a)
}

const aa1 = (a)=> {
    console.log("실행" + a)
}

const aa2 = (x) => console.log("실행" + x);
  
const aa3 = (x) => (console.log("실행" + x));
  

aa(1)  //  기본 함수
aa1(2) // 화살표 함수 function 에서 const 로 변경 하면서 =>(화살표 사용)
aa2(3) // 괄호 삭제
aa3(4) // 소괄호 사용 가능