import React, { useState } from "react";
import Button from "../Button";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.scss";

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks((oldTasks) => [...oldTasks, { task, time, selected: false, completed: false, id: uuidv4() }]);
        setTask("");
        setTime("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>Adicione um novo estudo</label>
                <input
                    type='text'
                    name='tarefa'
                    id='tarefa'
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder='O que você quer estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>Tempo</label>
                <input
                    type='time'
                    step='1'
                    name='tempo'
                    id='tempo'
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    min='00:00:00'
                    max='1:30:00'
                    required
                />
            </div>
            <Button type='submit'>Adicionar</Button>
        </form>
    );
}
export default Form;

// Class Component
// class Form extends React.Component<FormProps> {
//     state = {
//         task: "",
//         time: "00:00",
//     };

//    addTask(event: React.FormEvent<HTMLFormElement>) {
//      event.preventDefault();
//      this.props.setTasks((oldTasks) => [...oldTasks, { ...this.state, selected: false, completed: false, id: uuidv4() }]);
//      this.setState({ task: "", time: "00:00" });
//    }

//     render() {
//         return (
//             <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
//                 <div className={style.inputContainer}>
//                     <label htmlFor='tarefa'>Adicione um novo estudo</label>
//                     <input
//                         type='text'
//                         name='tarefa'
//                         id='tarefa'
//                         value={this.state.task}
//                         onChange={(event) => this.setState({ ...this.state, task: event.target.value })}
//                         placeholder='O que você quer estudar'
//                         required
//                     />
//                 </div>
//                 <div className={style.inputContainer}>
//                     <label htmlFor='tempo'>Tempo</label>
//                     <input
//                         type='time'
//                         step='1'
//                         name='tempo'
//                         id='tempo'
//                         value={this.state.time}
//                         onChange={(event) => this.setState({ ...this.state, time: event.target.value })}
//                         min='00:00:00'
//                         max='1:30:00'
//                         required
//                     />
//                 </div>
//                 <Button type='submit'>Adicionar</Button>
//             </form>
//         );
//     }
// }