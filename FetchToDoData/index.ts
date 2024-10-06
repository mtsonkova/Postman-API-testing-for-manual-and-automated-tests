import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
        The ToDo with ID: ${id}
        Has a title: ${title}
        and finished status: ${completed}`)
 });
