import "./styles.css";

/**
 * 
 * Sort an array of duplicate numbers in order of frequency of elements.
If the frequency of two or more elements is the same, keep them in natural ascending order. 

Test cases:
Input - [2,1,9,1,2,5,1,6,1] 
Expected output - [5,6,9,2,2,1,1,1,1]

Input - [2,1,9,11,3,7,4,6] 
Expected output - [1,2,3,4,6,7,9,11] 

Input - [2,1,5,1,2,5,1,5,1] 
Expected output - [2,2,5,5,5,1,1,1,1]]

Input - [-2,1,9,1,2,5,1,6,2] 
Expected output - [-2, 5, 6, 9, 2, 2, 1, 1, 1]
 */

function sortOnFreq(arr) {
  const counts = arr.reduce((prev, a) => {
    if (prev[a]) prev[a] = prev[a] + 1;
    else prev[a] = 1;
    return prev;
  }, {});

  let nonRepeat = [];
  let repeatarr = [];
  Object.entries(counts).map(([key, val]) => {
    if (val === 1) nonRepeat.push(parseFloat(key));
    else repeatarr.push(parseFloat(key));
  });

  // console.log(repeatarr);
  repeatarr = repeatarr.sort((a, b) => {
    return counts[a] - counts[b];
  });
  // console.log(repeatarr);

  let res = nonRepeat.sort((a, b) => {
    return a - b;
  });

  for (var j = 0; j < repeatarr.length; j++) {
    const times = counts[repeatarr[j]] || 1;
    const arrFill = new Array(times).fill(repeatarr[j]);
    res = res.concat(arrFill);
  }
  return res;
}

console.log(sortOnFreq([2, 1, 9, 1, 2, 5, 1, 6, 1]));
console.log(sortOnFreq([2, 1, 9, 11, 3, 7, 4, 6]));
console.log(sortOnFreq([2, 1, 9, 2, 5, 6, 1]));

function fun1() {
  var x = "some";
  return function () {
    var b = x;
    console.log(x);
  };
}

const fun2 = fun1();
fun2();


/**
 * 
 * [{
	"name": "abc",
	"age": 34,
	"address": {
		"no": 1,
		"flatName": "def"
	}
}, {
	"name": "trs",
	"age": 56,
	"address": {
		"no": 3,
		"flatName": "ewd"
	}
}]
 */

 const idx = 0;
 const state = [{
	"name": "abc",
	"age": 34,
	"address": {
		"no": 1,
		"flatName": "def"
	}
}, {
	"name": "trs",
	"age": 56,
	"address": {
		"no": 3,
		"flatName": "ewd"
	}
}];
const newState = [...state.slice(0,idx),{...state[idx], address : {
  ...state[idx].address, flatName: "New Name"
}} , ...state.slice(idx+1)];

console.log(newState);
