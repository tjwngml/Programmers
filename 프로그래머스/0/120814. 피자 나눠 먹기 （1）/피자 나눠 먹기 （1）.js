function solution(n) {
//     if (n<1 || n>100){
//         return '오류';
//     }
    
    
    if (1<= n && n <= 7) {
    return 1;
    }
    else if (8<= n && n <= 14) {
    return 2;
    }
    else if (15<= n && n <= 21) {
    return 3;
    }   
    else if (22<= n && n <= 28) {
    return 4;
    }   
    else if (29<= n && n <= 35) {
    return 5;
    }
    else if (36<= n && n <= 42) {
    return 6;
    }
    else if (43<= n && n <= 49) {
    return 7;
    } 
    else if (50<= n && n <= 56) {
    return 8;
    } 
    else if (57<= n && n <= 63) {
    return 9;
    } 
    else if (64<= n && n <= 70) {
    return 10;
    }  
    else if (71<= n && n <= 77) {
    return 11;
    } 
    else if (78<= n && n <= 84) {
    return 12;
    } 
    else if (85<= n && n <= 91) {
    return 13;
    } 
    else if(92<= n && n<= 98) {
    return 14;
    } else {return 15;}
}