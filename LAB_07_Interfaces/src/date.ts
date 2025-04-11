//com a data atual
const dataAtual = new Date();

//com uma string
const dataNascimento = new Date("2005-11-01");

//com valores numericos(ano, mes, dia, etc)
const dataEspecifica = new Date(2025, 4, 11);
const dataComHora = new Date(2025, 4, 11, 19, 20, 0);

//Date para string(formatando)
const data = new Date();
console.log(data.toString());
console.log(data.toDateString());
console.log(data.toTimeString());
console.log(data.toISOString());

//String para Date
const dataISO = new Date("2025-04-11 T13:00:00Z"); //horario UTC
const dataLocal = new Date("2025-04-11 T10:00:00"); //horario local

//formatos locais e internacionais
const hoje = new Date();
console.log(hoje.toLocaleDateString());
console.log(hoje.toLocaleTimeString());

//comparação e manipulação de datas

const data1 = new Date("2025-04-10");
const data2 = new Date("2025-04-11");

console.log(data1 < data2); // true

//somando dias
const date = new Date () ;
data.setDate (date.getDate() + 5);
console.log(date);

