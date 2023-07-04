const Move = function () {
  this.handlers = [];

  this.subscribe = function (fn) {
    this.handlers.push(fn);
  };

  this.unSubscribe = function (fn) {
    this.handlers = this.handlers.filter((item) => item !== fn);
  };

  this.fire = function (o, obj1) {
    const scope = obj1 || window;
    this.handlers.forEach((item) => {
      obj1.call(scope, o);
    });
  };
};

const moveHandler = function (item) {
  console.log("fired: " + item);
};

const moveHandler2 = function (item) {
  console.log("Moved: " + item);
};
const move = new Move();
// subscribe 1st observer
move.subscribe(moveHandler);
move.fire("event #1");
// unsubscribe 1st observer
move.unsubscribe(moveHandler);
move.fire("event #2");
// subscribe 1st & 2nd observer
move.subscribe(moveHandler);
move.subscribe(moveHandler2);
move.fire("event #3");
