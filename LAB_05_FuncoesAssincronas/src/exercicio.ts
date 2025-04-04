type Tarefa = {
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

const tarefas : Tarefa[] = [
    {descricao: "Fazer relatório", prioridade: 2, concluida: false },
    {descricao: "Enviar e- mail", prioridade: 3, concluida: false },
    {descricao: "Reunião com equipe", prioridade: 1, concluida: false }
];

function imprimirTarefa (tarefas: Tarefa[],descricao: string, indice: number, totalTarefas: number ) : void {
    console.log (Tarefa concluída: ${descricao});
    console.log (Progresso: ${indice + 1}/ ${totalTarefas});
}

executarTarefas (tarefas, imprimirTarefa, 1500);
