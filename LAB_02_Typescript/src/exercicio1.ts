let Idades: number[] = [10, 15, 20, 8, 17, 25];

for(let i = 0; i < 6; i++){
    if(Idades[i] < 12){
        console.log(`Idade: ${Idades[i]}, Classificação: Criança`);
    } else if(Idades[i] > 12 && Idades[i] < 18){
        console.log(`Idade: ${Idades[i]}, Classificação: Adolescente`);
    }else{
        console.log(`Idade: ${Idades[i]}, Classificação: Adulto`);
    }
}