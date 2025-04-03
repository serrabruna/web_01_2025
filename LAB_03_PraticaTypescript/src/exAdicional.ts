let Produtos: string[] = ["Arroz", "Feijão", "Leite", "Pão", "Açúcar", "Café", "Óleo"];


let indiceLeite = Produtos.indexOf("Leite");
if (indiceLeite !== -1) {
    Produtos[indiceLeite] = "Queijo";
}

for (let i = 0; i < Produtos.length - 1; i++) {
    Produtos[i] = Produtos[i + 1];
}
Produtos.length -= 1;

Produtos[Produtos.length] = "Farinha";

for (let i = 0; i < Math.floor(Produtos.length / 2); i++) {
    let temp = Produtos[i];
    Produtos[i] = Produtos[Produtos.length - 1 - i];
    Produtos[Produtos.length - 1 - i] = temp;
}

console.log("Lista final de produtos:", Produtos);
console.log("Número total de itens:", Produtos.length);