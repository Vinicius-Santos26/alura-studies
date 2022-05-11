import React, { ReactNode } from "react";

import style from "./Button.module.scss";

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
};

class Button extends React.Component<ButtonProps> {
    render() {
        const { type = "button" } = this.props;

        return (
            <button className={style.botao} type={type}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
