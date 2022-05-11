import { useState, useEffect } from "react";
import Button from "../Button";
import Clock from "./Clock";
import { ITask } from "../../types/task";
import { timeToSeconds } from "../../common/utils/time";

import style from "./Timer.module.scss";

interface TimerProps {
    selectedTask: ITask | undefined;
    endTask: () => void;
}

export default function Timer({ selectedTask, endTask }: TimerProps) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selectedTask?.time){
            setTime(timeToSeconds(selectedTask.time));
        } 
    }, [selectedTask]);

    function regressive(taskTime: number = 0) {
        setTimeout(() => {
            if(taskTime > 0){
                let timeLeft = taskTime - 1;
                setTime(timeLeft);
                return regressive(timeLeft);
            }
            endTask();      
        }, 1000);
    };

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={ () => regressive(time) }>Começar</Button>
        </div>
    );
}
