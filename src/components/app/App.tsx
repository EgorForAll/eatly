import React from 'react';
import styles from './App.module.scss';
import Header from "@/components/layout/header/Header";
import Intro from "@/components/layout/intro/Intro";
import Statistics from "@/components/layout/statistics/statistics";
import {statsList} from "@/mock/mock";
import Quality from "@/components/layout/quality/quality";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
        <main className='main'>
            <Intro/>
            <Statistics statsList={statsList}/>
            <Quality />
        </main>
    </div>
  );
}

export default App;
