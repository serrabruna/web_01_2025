"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var Livro_1 = require("./Livro");
var aluno1 = new Aluno_1.Aluno("Carlos", 21, "ADS", "BT1111111");
aluno1.imprimir();
var livro1 = new Livro_1.Livro("A vida invisivel de Addie Larue", "Victoria Schwab", 2021, "Galera");
livro1.exibirDados();
