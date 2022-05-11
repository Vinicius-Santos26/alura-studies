import { useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import { ITask } from "../../types/task";
import { timeToSeconds } from "../../common/utils/time";

import style from "./Timer.module.scss";

interface TimerProps {
    selectedTask: ITask | undefined;
}

export default function Timer({ selectedTask }: TimerProps) {
    const [time, setTime] = useState<Number>();

    /*if(selectedTask?.time){
        setTime(timeToSeconds(selectedTask.time));
    }*/

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>Começar</Button>
        </div>
    );
}
