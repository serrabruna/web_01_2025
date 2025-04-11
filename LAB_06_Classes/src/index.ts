import { Aluno } from "./Aluno";
import { Livro } from "./Livro";

const aluno1 = new Aluno("Carlos", 21, "ADS", "BT1111111")

aluno1.imprimir()

const livro1 = new Livro("A vida invisivel de Addie Larue", "Victoria Schwab", 2021, "Galera")

livro1.exibirDados()