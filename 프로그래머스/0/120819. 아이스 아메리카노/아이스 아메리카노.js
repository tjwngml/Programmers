function solution(money) {
    
    
  const cup = Math.floor(money / 5500) ;
  const coin =  money - (5500 * cup);
  const newArray = [];
    
  newArray.push(cup);
  newArray.push(coin);
  
    return newArray;

}