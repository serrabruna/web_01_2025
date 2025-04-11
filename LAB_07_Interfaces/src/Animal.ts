interface Animal{
    nome: string;
    emitirsom() : void;
}

class Cachorro implements Animal{
    nome: string

    constructor(nome: string){
        this.nome = nome;
    }

    emitirsom(): void{
        console.log("Au Au");
    }
}