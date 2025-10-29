function solution(n) {
    let count = 0
   for(i=1;i<n+1;i++){
       if(n%i === 0){
       ++count;    
           
       }
   }
    return count
}