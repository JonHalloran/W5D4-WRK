Array.prototype.uniq = function () {
  const arr = [];
  this.forEach((el) => {
    if (!arr.includes(el)) {
      arr.push(el);
    }
  });
  return arr;
};

Array.prototype.twoSum = function() {
  const pairs = [];
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

Array.prototype.transpose = function() {
  const transpose = [];
  for(let i = 0; i< this[0].length; i++) {
    transpose.push([]);
  }
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      transpose[j].push(this[i][j]);
    }
  }

  return transpose;
};
