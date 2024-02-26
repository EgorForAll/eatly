// @flow
import * as React from 'react';
import styles from "./dropdown.module.scss";
import {IDropdown} from "@/interfaces/dropdown";
import {ReactComponent as Plus} from "../../../assets/images/plus.svg";
import {ReactComponent as Minus} from "../../../assets/images/minus.svg";
import {useState} from "react";

type TDropdown = {
    question: IDropdown
};

const Dropdown: React.FC<TDropdown> = ({question}) => {
    const [opened, setOpened] = useState(false);


    return (
        <li className={styles.dropdown}>
            <header className={styles.header}>
                <h3 className={styles.title}>{question.title}</h3>
                <button data-testid={'toggle-button'} className={styles.button} onClick={() => setOpened(!opened)}>
                    {opened ? <Minus/> : <Plus />}
                </button>
            </header>
            <p style={{maxHeight: opened ? '100px' : '0'}} className={styles.text}>{question.description}</p>
        </li>
    );
};

export default Dropdown;