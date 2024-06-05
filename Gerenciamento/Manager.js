class Manager {
    constructor() {
        this.tarefas = [];
    }

    // Adicionar uma tarefa
    addTarefa(tarefa) {
        this.tarefas.push({ nome: tarefa, concluida: false });
    }

    // Remover uma tarefa
    removeTarefa(indiceTarefa) {
        this.tarefas.splice(indiceTarefa, 1);
    }

    // Marcar uma tarefa como concluída
    markTask(indiceTarefa) {
        this.tarefas[indiceTarefa].concluida = true;
    }

    // Listar todas as tarefas
    listTask() {
        return this.tarefas;
    }

    // Filtrar tarefas por status (concluídas/não concluídas)
    filterTask(concluidas) {
        return this.tarefas.filter(tarefa => tarefa.concluida === concluidas);
    }
}

module.exports = Manager;
