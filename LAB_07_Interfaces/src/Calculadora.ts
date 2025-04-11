interface Calculadora{
    somar(a: number, b: number):number;
    subtrair(a: number, b: number): number;
}

const minhaCalculadora: Calculadora = {
    somar(a,b){
        return a + b;
    },
    subtrair(a,b){
        return a - b;
    }
}
