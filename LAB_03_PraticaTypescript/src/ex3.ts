let numeroOuString: (number | string)[] = [10, "Azul", 25, "Vermelho", 30, "Verde"];
let valoresNumericos: number[] = [];
let valoresTextuais: string[] = [];

for(let item of numeroOuString){
    if(typeof item == "string"){
        valoresTextuais.push(item);
    } else if(typeof item == "number"){
        valoresNumericos.push(item);
    }
}

console.log(`Valores Numéricos: ${valoresNumericos}`);
console.log(`Valores Textuais: ${valoresTextuais}`);