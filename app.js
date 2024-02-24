const readline = require('readline-sync');

let tasks = [];

function addTask() {
    const description = readline.question('Descripción de la tarea: ');
    tasks.push({ description, completed: false });
    console.log('Tarea añadida.');
}

function deleteTask() {
    const index = readline.question('Índice de la tarea a eliminar: ');
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
}

function completeTask() {
    const index = readline.question('Índice de la tarea completada: ');
    tasks[index].completed = true;
    console.log('Tarea completada.');
}

function printTasks() {
    console.log('Lista de tareas:');
    tasks.forEach((task, index) => {
        console.log(`${index}. [${task.completed ? 'x' : ' '}] ${task.description}`);
    });
}

while (true) {
    console.log('\n1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');
    const choice = readline.question('Elige una opción: ');

    switch (choice) {
        case '1':
            addTask();
            break;
        case '2':
            deleteTask();
            break;
        case '3':
            completeTask();
            break;
        case '4':
            printTasks();
            break;
        case '5':
            process.exit(0);
        default:
            console.log('Opción inválida.');
    }
}
