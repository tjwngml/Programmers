function solution(array, height) {
for(var i = 0; i<array.length; i++){
   if(array[i] <= height) {
       array.splice(i,1);
      i--;
       
       }
  
   } 
    return array.length;
}