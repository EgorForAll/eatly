// @flow
import * as React from 'react';
import styles from "./questions.module.scss";
import {IDropdown} from "@/interfaces/dropdown";
import Dropdown from "@/components/blocks/dropdown/dropdown";

type TQuestions = {
    questions: IDropdown[]
};
const Questions: React.FC<TQuestions> = ({questions}) => {
    return (
        <section className={styles.question}>
            <h2 className={styles.title}>Frequently Asked <br/>
                <span className={styles.colored}>Questions</span></h2>
            <div className={styles.container}>
                {questions && questions.map((item, index) => <Dropdown question={item} key={index}/>)}
            </div>
        </section>
    );
};

export default Questions;