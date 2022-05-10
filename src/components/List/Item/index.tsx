import style from './ListItem.module.scss';

type ListItemProps = {
    task: string, 
    time: string
}

export default function ListItem({task, time} : ListItemProps) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    );
}