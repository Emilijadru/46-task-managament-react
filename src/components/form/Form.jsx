import { useState } from 'react';
import style from './Form.module.css'

export function Form({ addTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [tags, setTags] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        addTask({
            columnIndex: 0,
            title: title,
            description: description,
            deadline: deadline,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        });
    }

    return (
        <form onSubmit={handleSubmit} id="task_form" className={style.form}>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="title">Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className={style.input} type="text" name="title" required />
            </div>
            <div className={style.formRow}>
                 <label className={style.label} htmlFor="desc">Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} className={style.textarea} name="description"></textarea>
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="deadline">Deadline</label>
                <input value={deadline} onChange={e => setDeadline(e.target.value)} className={style.input} type="text" name="deadline" />
            </div>
            <div className={style.formRow}>
                <label className={style.label} htmlFor="tags">Tags</label>
                <input value={tags} onChange={e => setTags(e.target.value)} className={style.input} type="text" name="tags" />
             </div>
            <div className={style.formRow}>
                <button className={style.btn} type="submit">Create task</button>
            </div>
        </form>
    );
}