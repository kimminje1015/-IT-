const s = new Set();
s.add(false);
s.add(1);
s.add('1');
s.add(1);
s.add(2);

console.log(s.size);

s.has(1);
console.log(s.has('1'));

for (const a of s){
  console.log(a);
}

s.forEach((a) =>{
  console.log(a);
})

s.delete(2);
s.clear();

const arr = [1,3,2,7,2,6,3,5];

const s1 = new Set(arr);
const result = Array.from(s1);
console.log(result);