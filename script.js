/* 
  data = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 5],
  ]
*/
/*
  expect = [
    [1, 6, 11],
    [2, 7, 12],
    [3, 8, 13],
    [4, 9, 14],
    [5, 10, 15]
  ]
*/

function generateMatrix(k = 10, n = 10) {
  const result = [];
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = [];
    for (var j = 0; j < k; j++) {
      newArr.push(counter);
      counter++;
    }
    result.push(newArr);
  }
  return result;
};

function generateMatrix2(k = 10, n = 10) {
  const result = new Array();
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = new Array();
    for (var j = 0; j < k; j++) {
      newArr.push(counter);
      counter++;
    }
    result.push(newArr);
  }
  return result;
};

function generateMatrix3(k = 10, n = 10) {
  const result = new Array(0);
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = new Array(0);
    for (var j = 0; j < k; j++) {
      newArr.push(counter);
      counter++;
    }
    result.push(newArr);
  }
  return result;
};

function generateMatrix4(k = 10, n = 10) {
  const result = [];
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = [];
    for (var j = 0; j < k; j++) {
      newArr[j] = counter;
      counter++;
    }
    result[i] = newArr;
  }
  return result;
};

function generateMatrix5(k = 10, n = 10) {
  const result = new Array();
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = new Array();
    for (var j = 0; j < k; j++) {
      newArr[j] = counter;
      counter++;
    }
    result[i] = newArr;
  }
  return result;
};

function generateMatrix6(k = 10, n = 10) {
  const result = new Array(0);
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = new Array(0);
    for (var j = 0; j < k; j++) {
      newArr[j] = counter;
      counter++;
    }
    result[i] = newArr;
  }
  return result;
};

function generateMatrix7(k = 10, n = 10) {
  const result = new Array(n);
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = new Array(k);
    for (var j = 0; j < k; j++) {
      newArr[j] = counter;
      counter++;
    }
    result[i] = newArr;
  }
  return result;
};

function generateMatrix8(k = 10, n = 10) {
  var counter = 0, externalIndex = 0, tempArray;
  const total = k * n;
  const result = new Array(n);
  while(counter < total) {
    const index = counter % k;
    if(index == 0) {
      tempArray = new Array(k);
    }
    tempArray[index] = counter + 1;
    if((counter + 1 ) % k == 0) {
      result[externalIndex] = tempArray;
      externalIndex++;
    }
    ++counter;
  }
  return result;
};

function generateMatrix9(k = 10, n = 10) {
  var counter = 0, externalIndex = 0, tempArray = new Array(k);
  const total = k * n;
  const result = new Array(n);
  while(counter < total) {
    const index = counter % k;
    tempArray[index] = counter + 1;
    if((counter + 1) % k === 0) {
      result[externalIndex] = [...tempArray];
      externalIndex++;
    }
    ++counter;
  }
  return result;
};

function generateMatrix10(k = 10, n = 10) {
  var counter = 0, externalIndex = 0, tempArray = new Array(k);
  const total = k * n;
  const result = new Array(n);
  while(counter < total) {
    const index = counter % k;
    tempArray[index] = counter + 1;
    if((counter + 1) % k === 0) {
      result[externalIndex] = Object.assign([], tempArray);
      externalIndex++;
    }
    ++counter;
  }
  return result;
};

function generateMatrix7(k = 10, n = 10) {
  const result = new Array(n);
  for (var i = 0, counter = 1; i < n; i++) {
    const newArr = new Array(k);
    for (var j = 0; j < k; j++) {
      newArr[j] = counter;
      counter++;
    }
    result[i] = newArr;
  }
  return result;
};


function rotateArrayWithMethods(array) {
  return array.reduce((result, subArray) =>
    subArray.map((elem, j) => {
      if(!result[j]) {
        result[j] = [];
      }
      result[j] = elem;
    }),
  new Array(array[0].length));
}

function rotateArrayWithForLoop(array) {
  const result = new Array(array[0].length);
  const len = array.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0, itemLen = array[i].length; j < itemLen; j++) {
      if(!result[j]) {
        result[j] = [array[i][j]];
        continue;
      }
      result[j] = array[i][j];
    }
  }
  return result;
}
const matrix = generateMatrix7(10000, 10000);
console.log('matrix prepered', matrix.length);

console.time('methods');
rotateArrayWithMethods(matrix)
console.timeEnd('methods');

console.time('for');
rotateArrayWithForLoop(matrix)
console.timeEnd('for');


console.time('1');
generateMatrix(10000, 10000);
console.timeEnd('1');

console.time('2');
generateMatrix2(10000, 10000);
console.timeEnd('2');

console.time('3');
generateMatrix3(10000, 10000);
console.timeEnd('3');

console.time('4');
generateMatrix4(10000, 10000);
console.timeEnd('4');

console.time('5');
generateMatrix5(10000, 10000);
console.timeEnd('5');

console.time('6');
generateMatrix6(10000, 10000);
console.timeEnd('6');

console.time('7');
generateMatrix7(10000, 10000);
console.timeEnd('7');

console.time('8');
generateMatrix8(10000, 10000);
console.timeEnd('8');

console.time('9');
generateMatrix9(10000, 10000);
console.timeEnd('9');
