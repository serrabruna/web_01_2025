type Funcionario = {
    nome : string ;
    cargo : string ;
};

const funcionarios : Funcionario [] = [
    { nome : " Marcos ", cargo : " Desenvolvedor " } ,
    { nome : " Fernanda ", cargo : " Gerente " } ,
    { nome : " Carlos ", cargo : " Desenvolvedor " } ,
    { nome : " Joana ", cargo : " Analista " }
    ];
    const cargoDesejado : string = " Desenvolvedor ";
    
    let cargo = funcionarios.filter(funcionario => funcionario.cargo == cargoDesejado);
    console.log(cargo);