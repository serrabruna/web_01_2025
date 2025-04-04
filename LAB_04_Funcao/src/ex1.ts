function maiuscula(p: string): string{
    return p.toUpperCase();
}

console.log(maiuscula("olá"));

const maiusculaArrow = (pArrow: string) : string => pArrow.toUpperCase(); 

console.log(maiusculaArrow('ola, mundo!'));