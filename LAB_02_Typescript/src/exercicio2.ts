let Nomes: string[] =  ["Carlos", "Ana", "Pedro", "Mariana"];
console.log(Nomes);

let posPedro: number = Nomes.indexOf("Pedro");
console.log(posPedro);
Nomes.splice(posPedro, 1);
console.log(Nomes);

Nomes.push("João");
Nomes.unshift("Beatriz");

let totalNomes: number = Nomes.indexOf("João") + 1;
console.log(`Total de nomes: ${totalNomes}, ${Nomes}`);