function solution(hp) {
    let General = Math.floor(hp/5);
    let firstRemainder = hp - (5*General);
    let Soldier = Math.floor(firstRemainder/3);
    let secondRemainder = hp - (5*General) - (3 *Soldier);
    let Worker = secondRemainder;
    let total = General + Soldier + Worker;
    return total;
}

// 장군개미 공격력 5
// 병정개미 공격력 3
// 일개미 공격력 1

// 예를 들어 여치 체력이 23 라고 할때, 일개미 23마리를 데려가도 되지만,
// 장군개미 네마리 ( 4마리 x 5 공격력) 와 병정개미 한마리( 1마리 x 3공격력)
// 사냥감의 체력 hp 가 매개변수, 체력에 딱 맞게 최소한의 병력을 구성하려면 
// 총 몇마리의 개미가 필요한지를 return 



