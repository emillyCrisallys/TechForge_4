abstract class TaskManager {
    protected tasks: Set<string> = new Set();

    abstract addTask(task: string): void;
    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class Project extends TaskManager {
    addTask(task: string): void {
        this.tasks.add(`Projeto: ${task}`);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        this.tasks.add(`Diária: ${task}`);
    }
}


const projeto = new Project();
projeto.addTask("Planejar site");
projeto.addTask("Configurar banco de dados");

const tarefasDiarias = new DailyTasks();
tarefasDiarias.addTask("Estudar TypeScript");
tarefasDiarias.addTask("Fazer exercício");

console.log("Tarefas do Projeto:", projeto.listTasks());
console.log("Tarefas Diárias:", tarefasDiarias.listTasks());
