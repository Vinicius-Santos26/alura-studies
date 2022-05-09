import React from "react";

function List() {
    const tasks = [
        {
            title: "React",
            time: "02:00:00",
        },
        {
            title: "Javascript",
            time: "01:30:00",
        },
        {
            title: "Flutter",
            time: "00:30:00",
        },
    ];

    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <h3>{task.title}</h3>
                            <span>{task.time}</span>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default List;
