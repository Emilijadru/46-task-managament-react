import { useState } from 'react';
import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';

export function Kanban({ tasks, removeTask }) {
    const [title, setTitle] = useState('');
    const [columns, setColumns] = useState(['Backlog', 'Todo']);

    function newColumnSubmit(event) {
        event.preventDefault();
        setColumns(prev => [...prev, title]);
        setTitle('');
    }

    function inputUpdate(event) {
        setTitle(event.target.value);
    }

    return (
        <section id="kanban" className={style.todo} style={{ gridTemplateColumns: `repeat(${columns.lenght + 1}, 1fr)` }}>
            {columns.map((column, idx) => (
                <KanbanColumn 
                key={idx} 
                tasks={tasks.filter(task => task.columnIndex === idx)} 
                title={column}
                removeTask={removeTask}
                />
            ))}
        <form className={style.newcolumn}>
            <input type='text' value={title} onChange={inputUpdate} placeholder='Naujas stulpelis..' />
            <button type='submit' onClick={newColumnSubmit}>Prideti</button>
        </form>
        </section>
    );
}