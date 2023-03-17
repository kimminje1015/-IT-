const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count , this.status.name;
  },
};
const { getCandy, status: { count,name } } = candyMachine;

console.log(getCandy);
console.log(count,name);