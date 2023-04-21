new Promise( (resolve) => {
    setTimeout(()=>{
        let stack = '에스프레소'
        console.log(stack)
        resolve(stack);
    },300);
}).then((prevStack) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(prevStack += " " + "물");
            resolve(prevStack);
        },300);
    });
}).then((prevStack)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(prevStack += " " + "얼음");
            resolve(prevStack);
        },300);
    });
})

const answer = Promise + '콜백지옥으로 가독성이 떨어지는걸 Promise로 가독성을 높인다';
console.log(answer);