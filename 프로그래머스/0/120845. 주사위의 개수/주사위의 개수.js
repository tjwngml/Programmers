function solution(box, n) {
    let newresult = 0;
    
    // for(i=0;i<box.length;i++){
    
    let howManyInWidth = Math.floor(box[0]/ n);
    let howManyInlength = Math.floor(box[1]/n);
    let howManyInheight = Math.floor(box[2]/n);
     
        newresult = howManyInWidth * howManyInlength * howManyInheight
    // }
    return newresult
    
}
// 배열 box 에는 가로,세로,높이가 저장되어 있음
// box[0] = 가로, box[1] = 세로 , box[2] = 높이 
// 정수 n은 모서리의 길이임
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 

// 입출력 예시 [10,8,6] 과 n=3 -> 3x2x2