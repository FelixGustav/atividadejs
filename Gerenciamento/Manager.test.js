const Manager = require('./Manager');

describe('Testes para a classe Manager', () => {
    let manager;

    beforeEach(() => {
        manager = new Manager();
        manager.addTarefa('Tarefa1');
        manager.addTarefa('Tarefa2');
        manager.addTarefa('Tarefa3');
    });

    test('Adicionar uma tarefa', () => {
        manager.addTarefa('Tarefa4');
        expect(manager.tarefas.length).toBe(4);
        expect(manager.tarefas[3].nome).toBe('Tarefa4');
        expect(manager.tarefas[3].concluida).toBe(false);
    });

    test('Remover uma tarefa', () => {
        manager.removeTarefa(1);
        expect(manager.tarefas.length).toBe(2);
        expect(manager.tarefas[1].nome).toBe('Tarefa3');
    });

    test('Marcar uma tarefa como concluida', () => {
        manager.markTask(0);
        expect(manager.tarefas[0].concluida).toBe(true);
    });

    test('Listar todas as tarefas', () => {
        const todasTarefas = manager.listTask();
        expect(todasTarefas.length).toBe(3);
        expect(todasTarefas[0].nome).toBe('Tarefa1');
        expect(todasTarefas[1].nome).toBe('Tarefa2');
        expect(todasTarefas[2].nome).toBe('Tarefa3');
    });

    test('Filtrar tarefas que estao concluidas', () => {
        manager.markTask(0);
        manager.markTask(2);
        const tarefasConcluidas = manager.filterTask(true);
        expect(tarefasConcluidas.length).toBe(2);
        expect(tarefasConcluidas[0].nome).toBe('Tarefa1');
        expect(tarefasConcluidas[1].nome).toBe('Tarefa3');
    });

    test('Filtrar tarefas que nao concluidas', () => {
        manager.markTask(0);
        const tarefasNaoConcluidas = manager.filterTask(false);
        expect(tarefasNaoConcluidas.length).toBe(2);
        expect(tarefasNaoConcluidas[0].nome).toBe('Tarefa2');
        expect(tarefasNaoConcluidas[1].nome).toBe('Tarefa3');
    });
});
