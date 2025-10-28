function solution(s1, s2) {
     let count = 0;
for(i=0; i<s1.length; i++){
     for(k=0;k<s2.length;k++){
         
         if(s1[i] === s2[k] ){ // s1의 인덱스와 s2의 인덱스의 차가 false이면 ( 두 string 값이 일치하면)
        
             count++;
            break // break 안 쓰면 count 값이 중복 됨
            }
         }     
  
    } 
    
return count;
}

//문자열 끼리 빼서 false값 나오면 같은 요소

//문자열 끼리 빼려면
//s1도 인덱스 0부터 length-1 까지
//s2도 인덱스 0부터 length-1 까지
//이중 for문 돌려야 할 듯..?

