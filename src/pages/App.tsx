import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { ITask } from "../types/task";

import style from "./App.module.scss";

function App() {
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [selectedTask, setSelectedTask] = useState<ITask>();

    function selectTask(task: ITask) {
        setSelectedTask(task);
        setTasks((oldTasks) =>
            oldTasks.map((oldTask) => ({
                ...oldTask,
                selected: oldTask.id === task.id,
            }))
        );
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List tasks={tasks} selectTask={selectTask} />
            <Timer selectedTask={selectedTask} />
        </div>
    );
}

export default App;