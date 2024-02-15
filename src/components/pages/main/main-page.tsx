// @flow
import * as React from 'react';
import Intro from "@/components/layout/intro/Intro";
import Statistics from "@/components/layout/statistics/statistics";
import {questions, statsList} from "@/layout-data/layout-data";
import Quality from "@/components/layout/quality/quality";
import Recipes from "@/components/layout/recipes/recipes";
import {orders, purchases, recipes, reviews} from "@/mock/mock";
import Dashboard from "@/components/layout/dashboard/dashboard";
import Reviews from "@/components/layout/reviews/reviews";
import Questions from "@/components/layout/questions/questions";


const MainPage: React.FC = () => {
    return (
        <main className='main'>
            <Intro/>
            <Statistics statsList={statsList}/>
            <Quality/>
            <Recipes recipes={recipes}/>
            <Dashboard orders={orders} purchases={purchases}/>
            <Reviews reviews={reviews}/>
            <Questions questions={questions}/>
        </main>
    );
};

export default MainPage;