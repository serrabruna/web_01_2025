let valores: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52];
let multiplosDe3: number[] = [];
let multiplosDe5: number[] = [];
let outros: number[] = [];

for(let item of valores){
    if(item % 3 == 0){
        multiplosDe3.push(item);
        for(let i = 0; i < multiplosDe3.length; i++){
            for (let j = i + 1; j < multiplosDe3.length; j++) {
                if (multiplosDe3[i] < multiplosDe3[j]) {
                    let temp = multiplosDe3[i];
                    multiplosDe3[i] = multiplosDe3[j];
                    multiplosDe3[j] = temp;
                }
            }
        }
    } else if (item % 5 == 0){
        multiplosDe5.push(item);
        for(let i = 0; i < multiplosDe5.length; i++){
            for(let j = i + 1; j < multiplosDe5.length; j++){
                if(multiplosDe5[i] < multiplosDe5[j]){
                    let temp = multiplosDe5[i];
                    multiplosDe5[i] = multiplosDe5[j];
                    multiplosDe5[j] = temp;
                }
            }
        }
    }else{
        outros.push(item);
        for(let i = 0; i < outros.length; i ++){
            for(let j = i + 1; j < outros.length; j++){
                if(outros[i] < outros [j]){
                    let temp = outros[i];
                    outros[i] = outros[j];
                    outros[j] = temp;
                }
            }
        }
    }
}

console.log(`Multiplos de 3: ${multiplosDe3}`);
console.log(`Multiplos de 5: ${multiplosDe5}`);
console.log(`Outros: ${outros}`);

