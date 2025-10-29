function solution(my_string, n) {
 
    let multiple='';
   for(i=0;i<my_string.length;i++){
        my_string[i].repeat(n);
    multiple += my_string[i].repeat(n);
   }
    
    
       return multiple
}