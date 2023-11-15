import { useState } from 'react';
import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';

export function Kanban() {
    const [title, setTitle] = useState('');
    const columns = ['Backlog', 'Todo'];
    const data = [
        {
            id: 1,
            columnIndex: 1,
            title: 'HTML',
            description: 'Task description about HTML',
            deadline: 2024,
            tags: ['html', 'font', 'color'],
        },
        {
            id: 2,
            columnIndex: 0,
            title: 'CSS',
            description: 'Task description about CSS',
            deadline: 2024,
            tags: ['css', 'column'],
        },
        {
            id: 3,
            columnIndex: 0,
            title: 'JavaScript',
            description: 'Task description about JavaScript',
            deadline: 2024,
            tags: ['js', 'loops', 'if'],
        },
    ];

    function newColumnSubmit(event) {
        event.preventDefault();
        columns.push(title);
        console.log('SUBMIT', title, columns);
    }

    function inputUpdate(event) {
        setTitle(event.target.value);
    }

    return (
        <section id="kanban" className={style.todo} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {columns.map((column, idx) => (
                <KanbanColumn tasks={data.filter(task => task.columnIndex === idx)} title={column}/>
            ))}
        <form className={style.column}>
            <input type='text' value={title} onChange={inputUpdate} placeholder='Naujas stulpelis..' />
            <button type='submit' onClick={newColumnSubmit}>Prideti</button>
        </form>
        </section>
    );
}