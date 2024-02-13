import React from 'react';
import styles from './App.module.scss';
import Header from "@/components/layout/header/Header";
import Intro from "@/components/layout/intro/Intro";
import Statistics from "@/components/layout/statistics/statistics";
import {statsList, questions} from "@/layout-data/layout-data";
import {recipes, orders, purchases, reviews} from "@/mock/mock";
import Quality from "@/components/layout/quality/quality";
import Recipes from "@/components/layout/recipes/recipes";
import Dashboard from "@/components/layout/dashboard/dashboard";
import Reviews from "@/components/layout/reviews/reviews";
import Questions from "@/components/layout/questions/questions";
import Footer from "@/components/layout/footer/footer";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
        <main className='main'>
            <Intro/>
            <Statistics statsList={statsList}/>
            <Quality />
            <Recipes recipes={recipes}/>
            <Dashboard orders={orders} purchases={purchases}/>
            <Reviews reviews={reviews} />
            <Questions questions={questions} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
