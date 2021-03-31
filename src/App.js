import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

/**
 * Import components
 */
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import SessionSection from './components/SessionSection';
import Controls from './components/Controls';
import Footer from './components/Footer';

const App = () => {
    return(
      <div className="container">
        <h2 style={{margin: '1rem'}}>25 + 5 Clock</h2>
        <div id="lengths-container">
          <BreakLength />
          <SessionLength />
        </div>
        <SessionSection
          sessionMinutes={25}
          sessionSeconds={'00'}
        />
        <Controls />
        <Footer />
      </div>
    );
};

export default hot(module)(App);
