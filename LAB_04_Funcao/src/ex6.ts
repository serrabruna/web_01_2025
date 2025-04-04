type Evento = {
    nome : string ;
    mes : string ;
};

const eventos : Evento [] = [
    { nome : " Workshop TypeScript ", mes : " Janeiro " } ,
    { nome : " Hackathon ", mes : " Março" } ,
    { nome : " Confer ê ncia de IA", mes : " Janeiro " }
];

const mesDesejado : string = " Janeiro ";

let mes = eventos.filter(evento => evento.mes == mesDesejado);
console.log(mes);