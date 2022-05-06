import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../header/Header';
import MainPage from '../pages/MainPage';
import PoemPage from '../pages/PoemPage';

import './app.scss';

const App = () => {
    const [word, setWord] = useState('');

    const updateWord = (word) => {
        setWord(word);
    };
    return (
        <Router>
            <div className="app">
                <Header updateWord={updateWord} />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage updateWord={updateWord} />
                        </Route>
                        <Route exact path="/poem">
                            <PoemPage word={word} />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;