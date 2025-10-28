function solution(slice, n) {
 while ( n % slice !== 0){
     
     let howManyPizza = Math.floor(n / slice);
     ++howManyPizza;
     return howManyPizza
     
 }
   return n / slice 
}