import React from 'react';
import styles from './App.module.scss';
import Header from "@/components/layout/header/Header";
import Intro from "@/components/layout/intro/Intro";
import Statistics from "@/components/layout/statistics/statistics";
import {statsList} from "@/layout-data/layout-data";
import {recipes} from "@/mock/mock";
import Quality from "@/components/layout/quality/quality";
import Recipes from "@/components/layout/recipes/recipes";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
        <main className='main'>
            <Intro/>
            <Statistics statsList={statsList}/>
            <Quality />
            <Recipes recipes={recipes}/>
        </main>
    </div>
  );
}

export default App;
