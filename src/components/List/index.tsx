import React from "react";
import ListItem from './Item';

import style from "./List.module.scss";

function List() {
    const tasks = [
        {
            task: "React",
            time: "02:00:00",
        },
        {
            task: "Javascript",
            time: "01:30:00",
        },
        {
            task: "Flutter",
            time: "00:30:00",
        },
    ];

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
