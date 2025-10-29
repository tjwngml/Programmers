function solution(n, numlist) {
   let newNumlist = numlist.filter(numlist => numlist %n === 0);
   return newNumlist }

