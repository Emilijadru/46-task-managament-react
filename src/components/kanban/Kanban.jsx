import style from './Kanban.module.css';
import { KanbanColumn } from './KanbanColumn';

export function Kanban() {
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

    return (
        <section id="kanban" className={style.todo} style={{ gridTemplateColumns: 'repeat(8, 1fr)' }}>
            <KanbanColumn tasks={data.filter(task => task.columnIndex === 0)} title="Backlog" />
            <KanbanColumn tasks={data.filter(task => task.columnIndex === 1)} title="Todo" />
            <KanbanColumn tasks={data.filter(task => task.columnIndex === 2)} title="In progress" />
            <KanbanColumn tasks={data.filter(task => task.columnIndex === 3)} title="Done" />
        </section>
    );
}