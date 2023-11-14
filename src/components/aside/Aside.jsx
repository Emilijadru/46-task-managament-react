import { Form } from '../form/Form';
import style from './Aside.module.css';

export function Aside() {
    return (
        <aside id="aside" class={style.aside}>
            <div className={style.asideBg}></div>
            <div className={style.asideContainer}>
                <header className={style.asideHeader}>
                    <h2 className={style.asideTitle}>Add task</h2>
                    <button type="button" className="fa fa-times"></button>
                </header>
                <div className={style.asideContent}>
                    <Form />
                </div>
            </div>
        </aside>
    )
}