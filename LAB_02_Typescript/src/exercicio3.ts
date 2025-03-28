let listaMista: (number | string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"];
let Num: number[] = [];
let str: string[] = [];

for(let item of listaMista){
    if(typeof item == "string"){
        str.push(item);
    } else if (typeof item == "number"){
        Num.push(item)
    }
}

console.log(`Numeros: ${Num}`);
console.log(`Frutas: ${str}`);
