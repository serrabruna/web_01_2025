"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
    Aluno.prototype.imprimir = function () {
        console.log("Nome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nCurso: ").concat(this.curso, "\n Matricula: ").concat(this.matricula));
    };
    return Aluno;
}());
exports.Aluno = Aluno;
