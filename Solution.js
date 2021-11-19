/*.  Code1 -> Aesthetic 
==============Aesthetic check - alternative inc and dec==========
https://cs.stackexchange.com/questions/116854/minimum-number-of-tree-cuts-so-that-each-pair-of-trees-alternates-between-strict
https://stackoverflow.com/questions/62392510/find-and-format-visually-aesthetically-pleasant-pattern-of-trees-in-a-forest-usi
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(isAesthetic(A)) return 0;

    if(A.length % 2 === 0) return -1;

    let count = 0;

    for(let i =0; i<A.length; i++){
        const newArr = [...A.slice(0,i), ...A.slice(i+1)];
        if(isAesthetic(newArr)) count++;
    }

    if(count === 0) return -1;
    else return count;
}

function isAesthetic(A){
    if(A.length % 2 !== 0) return false;
    let prevtype = null;
    let isAes = false;
    for(let i = 0; i<A.length-1; i+=1){
        let type = '';
        if(A[i+1] - A[i] > 0){
            type = 'inc';
        }else if(A[i+1] - A[i] < 0){
            type = 'dec'
        }
        if(!prevtype || (prevtype === 'inc' && type === 'dec') || (prevtype === 'dec' && type === 'inc')){
            prevtype = type;
            isAes = true;
        }
        else{
            return false;
        }
    }
    return isAes;
}


/*
CODE 2 -> FROG JUMP
https://leetcode.com/discuss/interview-question/781066/microsoft-oa-codility
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(blocks) {
    // write your code in JavaScript (Node.js 8.9.4)
    var n = blocks.length;
    var r = new Array(n);
    var l = new Array(n)

    r[n-1] = n-1;
    for(var i=n-2;i>=0;i--){
        r[i] = i;
        if(blocks[i+1]>=blocks[i]) r[i] = r[i+1];
    }

    l[0] = 0;
    for(var i=1;i<n;i++){
        l[i] = i;
        if(blocks[i-1]>=blocks[i]) l[i] = l[i-1];
    }

    var max = 1;
    for(var i=0;i<n;i++){
        max = Math.max(r[i]-l[i]+1,max);
    }
    return max;
}


/*Conde nast -> Minimum number of swaps required to sort an array*/

//NOT WORKING
function solution(arr){
    let swapCnt = 0;
    const sorted = JSON.stringify([...arr].sort());
    console.log('sorted');
debugger;
    for(var i=0; i<arr.length-1; i++){
        let temp = arr[i];
        let idx = i;

        for(var j=i+1; j<arr.length-1; j++){
            if(arr[j] < temp){
                temp = arr[j];
                idx = j;
            }
        }

        if(i !== idx){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            swapCnt++;
        }
        if(JSON.stringify(arr) === sorted) break;
    }

return swapCnt;
}

//REFERENCE -> https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/





