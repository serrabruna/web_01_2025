let produtos: string[] = ["Arroz", "Feijão", "Leite", "Pão"];
let sub = produtos.indexOf("Leite");

produtos.splice(sub, 1);
produtos[sub] = "Queijo";
produtos.shift();
produtos.push("Café");

let final = produtos.indexOf("Café") + 1;
console.log(`Lista final: ${produtos}`);
console.log(`Número de itens: ${final}`);
