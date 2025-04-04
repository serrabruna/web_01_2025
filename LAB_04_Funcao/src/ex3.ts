function dobrarNumeros(vet: number[], tam: number){
    for(let i = 0; i < tam; i++){
        vet[i] = vet[i] * 2;
    }
    return vet;
}

let vet: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tam = vet.length;

console.log(dobrarNumeros(vet, tam));