import { ITask } from "../../../types/task";
import style from "./ListItem.module.scss";

interface ListItemProps extends ITask {
    selectTask: (selectedTask: ITask) => void;
}

export default function ListItem({ task, time, selected, completed, id, selectTask }: ListItemProps) {
    return (
        <li className={`${style.item} ${selected ? style.itemSelecionado : ''}`} onClick={() => selectTask({task, time, selected, completed, id})}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
}