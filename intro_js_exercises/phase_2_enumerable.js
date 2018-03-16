Array.prototype.myEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  const mapped = [];
  this.myEach((el) => {
    mapped.push(cb(el));
  });
  return mapped;
};

Array.prototype.myReduce = function(cb, initVal) {
  let arr = this;
  let accumulator = (initVal === undefined) ?  arr.shift() : initVal;
  arr.myEach((el) => {
    accumulator = cb(accumulator, el);
  });
  return accumulator;
};
