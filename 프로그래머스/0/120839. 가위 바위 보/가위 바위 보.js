function solution(rsp) {
    let result = '';
    
    for(i=0; i<rsp.length;i++){
    if(rsp[i]==='2'){
    result +='0';
    } else if(rsp[i]==='0'){
    result += '5'; 
    } else if(rsp[i]==='5'){
    result += '2'; 
    }
       
    }  return result
}


// 문자열 변경
// 2->0
// 0->5
// 5->2 