let numeros : number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];

let par: number[] = [];
let impar: number[] = [];

let contador: number = 0;

let indice: number = numeros.indexOf(91);
console.log(indice);

for(let i = 0; i <= indice; i++){
    if(numeros[i] % 2 == 0){
        if(numeros[i] >= numeros[i - 1]){
            par.push(numeros[i]);
        }else{
            par.unshift(numeros[i]);
        }
        par.sort((a, b) => a - b);
    }
    else{
        if(numeros[i] >= numeros[i - 1]){
            impar.push(numeros[i]);
        }else{
            impar.unshift(numeros[i]);
        }
        impar.sort((a, b) => a - b);
    }   
    contador = numeros[i] + numeros[i - 1];
}

let media = contador/indice;

console.log(`Array: ${numeros}`);
console.log(`Pares: ${par}`);
console.log(`Impares: ${impar}`);
console.log(`Média: ${media}`);
