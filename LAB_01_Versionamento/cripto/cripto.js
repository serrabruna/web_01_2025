function decifrar(){
    let mensagem = document.querySelector("#mensagem").value.trim();
    if(mensagem.toUpperCase() == 'FIM'){
        return;
    }

    mensagem = mensagem.replace(/@/g, "a");
    mensagem = mensagem.replace(/3/g, "e");
    mensagem = mensagem.replace(/!/g, "i");
    mensagem = mensagem.replace(/\*/g, "o");
    mensagem = mensagem.replace(/%/g, "u");
    mensagem = mensagem.replace(/[02468]/g, "");

    mensagem = mensagem.split(" ").map(palavra => 
        palavra.length % 2 !== 0 ? palavra.split("").reverse().join("") : palavra
    ).join(" ");

    console.log(mensagem);

    document.getElementById("resultado").innerText = "Mensagem decifrada: " + mensagem;

}