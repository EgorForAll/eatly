// @flow
import * as React from "react";
import Intro from "@/components/layout/intro/Intro";
import Statistics from "@/components/layout/statistics/statistics";
import { questions, statsList } from "@/layout-data/layout-data";
import Quality from "@/components/layout/quality/quality";
import Recipes from "@/components/layout/recipes/recipes";
import { orders, purchases } from "@/mock/mock";
import Dashboard from "@/components/layout/dashboard/dashboard";
import Reviews from "@/components/layout/reviews/reviews";
import Questions from "@/components/layout/questions/questions";
import MainHeader from "@/components/layout/main-header/main-header";
import Footer from "@/components/layout/footer/footer";
import { useEffect } from "react";

const MainPage: React.FC = () => {
  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);
  return (
    <>
      <MainHeader />
      <main className="main">
        <Intro />
        <Statistics statsList={statsList} />
        <Quality />
        <Recipes />
        <Dashboard orders={orders} purchases={purchases} />
        <Reviews />
        <Questions questions={questions} />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
