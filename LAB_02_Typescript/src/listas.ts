// Lista de números
let numbers: number[] = [1 , 2 , 3 , 4 , 5];

// Lista de strings
let nomes: string[] = ["Ana", "João", "Maria"];
let posJoao: number = nomes.indexOf("João")
console.log(posJoao) // Encontra o índice de "João", que será 1
nomes.splice(posJoao, posJoao) // Saída: 1

console.log(nomes)

// Lista genérica(usando Array < tipo >)
let idades: Array < number > = [20 , 30 , 40];

// Lista com tipos mistos ( usando Union Types )
let misto: (number | string)[] = [1, "dois", 3, "quatro"];

let fruits: string[] = ["Maçã", "Banana"];
fruits.push("Laranja"); // Adiciona no final
fruits.unshift("Uva"); // Adiciona no início


fruits.pop(); // Remove o ú ltimo elemento (" Laranja ")
fruits.shift(); // Remove o primeiro elemento (" Uva ")


console.log(fruits[0]); // " Maçã "
console.log( fruits.length); // 3