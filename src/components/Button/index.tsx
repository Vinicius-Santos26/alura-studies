import React, { ReactNode } from "react";

import style from './Button.module.scss'

type ButtonProps = {
    children: ReactNode
};

class Button extends React.Component<ButtonProps> {
    render() {    
        return (
        <button className={style.botao}>
            {this.props.children}
        </button>);
    }
}

export default Button;
