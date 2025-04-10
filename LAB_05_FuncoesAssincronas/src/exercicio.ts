type Tarefa = {
    descricao: string;
    prioridade: number;
    concluida: boolean;
};

const tarefas: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false },
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false }
];

function executarTarefas(
    tarefas: Tarefa[],
    callback: (descricao: string, indice: number, total: number) => void,
    intervalo: number = 1000
    ): void {
    tarefas.sort((a, b) => a.prioridade - b.prioridade);
    let indice: number = 0;
    const total: number = tarefas.length;

    const id = setInterval(() => {
        if (indice >= total) {
            clearInterval(id);
            return;
        }

        const tarefa = tarefas[indice];

        if (tarefa.descricao === "Cancelar") {
            clearInterval(id);
            return;
        }

        tarefa.concluida = true;
        callback(tarefa.descricao, indice, total);
        indice++;
    }, intervalo);
}

function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void {
    console.log(`Tarefa concluída: ${descricao}`);
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
}

executarTarefas(tarefas, imprimirTarefa, 1500);
