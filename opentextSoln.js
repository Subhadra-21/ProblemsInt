//Qtn 1:

/*
//working

function solution(S) {
    let uniqStr = [];
    // write your code in JavaScript (Node.js 8.9.4)
    for(var i = 0; i<S.length; i++){
        for(var j = i+1; j<S.length; j++){
            let subStr = S.substring(i, j+1);
            if(occurOnce(S, subStr)){
                uniqStr.push(subStr);
            }
        }
    }
    console.log(uniqStr);
   return Math.min(...uniqStr.map(s => s.length));
}


function occurOnce(orig, substr){
   const fidx = orig.indexOf(substr);
   const lidx = orig.lastIndexOf(substr);  
   return fidx === lidx;
}

*/


/*
function solution(S) {
    let uniqStr = [];
    // write your code in JavaScript (Node.js 8.9.4)
    for(var i = 0; i<S.length; i++){
        for(var j = i+1; j<S.length; j++){
            let subStr = S.substring(i, j+1);
            if(occurOnce(S, subStr)){
                uniqStr.push(subStr);
            }
        }
    }
    console.log(uniqStr);
   return Math.min(...uniqStr.map(s => s.length));
}

//not working
function occurOnce(orig, substr){
    let remainiStg = orig.replace(new RegExp(substr,"g"), '') || '';
    console.log('orig,',orig, 'remainiStg', remainiStg, 'substr', substr );
    if((orig.length - remainiStg.length) === substr.length) return true;
    else return false;
}
*/

// https://www.geeksforgeeks.org/smallest-substring-occurring-only-once-in-a-given-string/
function solution(a)
{
    let a1 = [];

    for(let i = 0; i < a.length; i++)
    {
        for(let j = i + 1; j <= a.length; j++)
        {
            if (i != j)
              
                // Append all substrings
                a1.push(a.substring(i, j));
        }
    }

    let a2 = new Map();
    for(let s=0;s<a1.length;s++)
    {
        if(a2.has(a1[s]))
            a2.set(a1[s],a2.get(a1[s])+1);
        else
            a2.set(a1[s],1);
    }
  
    let freshlist = [];
  
    for(let s of a2.keys())
    {
        if (a2.get(s) == 1)
            freshlist.push(s);
    }
    let dictionary = new Map();
      
    for(let s=0;s<freshlist.length;s++)
    {
        dictionary.set(freshlist[s],
        freshlist[s].length);
    }
     
  
    let newlist = [];
    for(let s of dictionary.keys())
        newlist.push(dictionary.get(s));
  
    let ans = Number.MAX_VALUE;
  
    for(let i=0;i<newlist.length;i++)
        ans = Math.min(ans, newlist[i]);
    return ans == Number.MAX_VALUE ? 0 : ans;
}

//=======Q2===========

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res = [];

    let NStr = parseInt(N) + '';
    NStr = NStr[0] === '-' ? NStr.slice(1) : NStr;
console.log(NStr);
    for(var i = 0; i<NStr.length; i++){
        let str = NStr.substring(0, i)+'5'+NStr.substring(i);
console.log(str, '  ', N, (N+'')[0]==='-')

        res.push((N+'')[0] === '-' ? '-'+str : str)
console.log(res)
    }

    return Math.max(...res.map(a => parseFloat(a)))
}
