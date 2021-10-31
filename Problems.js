/*find sum of grouped elem*/

var arr = [1,2,3,4,5,6];
var num2 = 2;

function grpSum(arr, cnt){
    if(!cnt) return arr;
    let res = [];
    for(let i = 0; i< arr.length;i+=cnt){
        const subArr = arr.slice(i,i+cnt);
        const sumRes = subArr.reduce((num1,num2)=>num1+num2, 0);
        res.push(sumRes);
    }
    return res;
}

console.log(grpSum(arr, num2));

