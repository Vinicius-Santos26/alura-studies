import React from "react";
import ListItem from "./Item";
import { ITask } from "../../types/task";
import style from "./List.module.scss";

type ListProps = {
    tasks: Array<ITask>;
};

function List({ tasks }: ListProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <ListItem key={index} {...task} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
