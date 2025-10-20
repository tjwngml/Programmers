function solution(n, t) {
    if(1<=n && n<=10 && 1<=t && t<= 25 ){
    return n*(2**t);}
    else {return 0;}
}