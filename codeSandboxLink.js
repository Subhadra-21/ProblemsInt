//JPM:
/*
API -> https://sv443.net/jokeapi/v2/
https://codesandbox.io/s/vigorous-wilson-myopv?file=/src/App.js

https://codesandbox.io/s/immutable-flower-n3i7e?file=/src/App.js

https://codesandbox.io/s/jpm1-myopv
*/

//coffeee bean
/*
https://codesandbox.io/s/js-coffee-xf60r (flat, permutation, pairarray with sum)
https://codesandbox.io/s/coofee2-q2idv
*/

/*
eagle view:
https://codesandbox.io/s/eagleview1-6gx0c?file=/index.html
https://codesandbox.io/s/eagleview2-lqscw?file=/src/index.js
*/


/*
mindera:
https://codesandbox.io/s/mindera1-ek7f7
*/

/*
capgemini:
https://codesandbox.io/s/capgemini-gguhh
*/


/*
cognizant:
https://stackblitz.com/edit/react-kr9jwk -> https://react-kr9jwk.stackblitz.io
https://stackblitz.com/edit/web-platform-nuqhu6 -> https://web-platform-nuqhu6.stackblitz.io
*/


/*
Soroco: Assessment in github.(https://github.com/Subhadra-21/Sor_Comments_JSON)
https://stackblitz.com/edit/web-platform-xg2oxe
https://jsfiddle.net/qye8p963/29/
*/

/*
Uplers:
https://stackblitz.com/edit/react-ts-9n711y?file=search-test2.jsx
others are assignment
*/

/*
wissen:
-> assessment
-> https://codesandbox.io/s/wissen1-0h97m?file=/src/App.js
-> https://codesandbox.io/s/wissen2-8ugnr -> imp
-> https://codesandbox.io/s/wissen3-i3zdt?file=/src/index.js
*/

/*
impact analysis:
-> impact.js file
->https://codesandbox.io/s/impactanalysis2-1cis7
*/

/*
Autonarp:
https://github.com/Subhadra-21/WebSocketExample
*/

/*
cisco and code-evolution:
https://stackblitz.com/edit/js-twg8go?file=test-cisco.js
*/

/* HCL
-> Fibonaci using recursion
// 0 1 1 2 3 5 8 .. 100
function fib(n, res=[0,1]){
  if(res.length === n) return res;
	res.push(res[res.length-2] + res[res.length-1]);
  return fib(n, res);
}

console.log(fib(10));

-> https://codesandbox.io/s/hcl2-e10t9?file=/src/index.js
*/

/*
LG:
-> https://codesandbox.io/s/lg1-ybri1?file=/src/index.js

*/

/*
Hexaware:
-> https://codesandbox.io/s/hexa1-m1m3f?file=/src/App.js
-> 2nd round
function b(){
console.log(myvar);    
}
b();
}
let myvar=1;
c();

-> Boolean(0), Number('32'), 
-> a=[]
   if(a){}else{}
-> hooks,hoc
-> flex-wrap, center element
-> JS engine for async operations
-> promises, callback fun's

*/


/*
conde nast:
-> https://codesandbox.io/s/conde2-hb2ud

*/

/*
others:
https://stackblitz.com/edit/family-tree1
https://stackblitz.com/edit/web-platform-ropztu?file=file1.html
https://stackblitz.com/edit/js-twg8go
*/


/*
Accion labs:
-> Uniq Array
function uniqArr(...intArr){
   let x = Array.from(intArr);
   x = intArr.reduce((arrF, iArr)=>{ arrF = arrF.concat(iArr); return arrF; },[])
   let res = new Set(x);
   return Array.from(res);
}

->sort array without js methods -> working for desc, not for asc
function sortArr(arr){
  let resArr = [];
  for(var i = 0; i<arr.length;i++){
    if(resArr.length === 0) resArr.push(arr[i]);
    else{
        for(var j = 0; j<resArr.length;j++){
            if(arr[i] > resArr[j]){
                resArr.splice(j,0,arr[i]);
                break;
            }
        }
    }
  }
 return resArr;
}

-> synthetic event, 403,409, redux flow with middle ware
-> react error boundry,renderProps, hoc, authentication,csrf token
-> relative urls
-> hoisting,closures, react17,react18, features
-> controlled vs uncontrolled, contextAPI vs redux, 
-> chery pick in github,rebase,squash
*/





