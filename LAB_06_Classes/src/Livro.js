"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao, editora) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }
    Livro.prototype.exibirDados = function () {
        console.log("Titulo: ".concat(this.titulo, "\nAutor: ").concat(this.autor, "\nAno de publica\u00E7\u00E3o: ").concat(this.anoPublicacao, "\n\n            Editora: ").concat(this.editora));
    };
    return Livro;
}());
exports.Livro = Livro;
