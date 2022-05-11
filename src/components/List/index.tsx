import React from "react";
import ListItem from "./Item";
import { ITask } from "../../types/task";
import style from "./List.module.scss";

interface ListProps {
    tasks: Array<ITask>;
    selectTask: (selectedTask: ITask) => void
};

function List({ tasks, selectTask }: ListProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <ListItem key={task.id} {...task} selectTask={selectTask} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
