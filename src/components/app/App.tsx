import React from 'react';
import styles from './App.module.scss';
import Header from "@/components/layout/header/Header";
import Intro from "@/components/layout/intro/Intro";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
        <main className='main'>
            <Intro/>
        </main>
    </div>
  );
}

export default App;
