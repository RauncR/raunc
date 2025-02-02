const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    boundCallBack = callback.bind(this);
    boundCallBack(this.speed);
    console.log(`myCar is driving at ${this.speed}`);
  },
};
function drive(speed) {
  this.speed = speed;
  console.log(`Start driving at ${this.speed}`);
}
myCar.operate(55, drive);
