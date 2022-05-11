import { ITask } from "../../../types/task";
import style from "./ListItem.module.scss";

interface ListItemProps extends ITask {
    selectTask: (selectedTask: ITask) => void;
}

export default function ListItem({ task, time, selected, completed, id, selectTask }: ListItemProps) {
    return (
        <li className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} onClick={() => !completed && selectTask({task, time, selected, completed, id})}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="tarefa-completada"></span>}
        </li>
    );
}