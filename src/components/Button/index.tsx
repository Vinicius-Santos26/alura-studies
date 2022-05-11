import React, { ReactNode } from "react";

import style from "./Button.module.scss";

interface ButtonProps {
    children?: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
};

function Button({children, type = "button", onClick}: ButtonProps){
    return (
        <button className={style.botao} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

//  Class Component
// class Button extends React.Component<ButtonProps> {
//     render() {
//         const { type = "button", onClick } = this.props;

//         return (
//             <button className={style.botao} type={type} onClick={onClick}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }