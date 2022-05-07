import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../header/Header';
import Spinner from '../spinner/Spinner';
import MainPage from '../pages/MainPage';

import './app.scss';

const PoemPage = lazy(() => import('../pages/PoemPage'));
const Page404 = lazy(() => import('../pages/Page404'));

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
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage updateWord={updateWord} />
                            </Route>
                            <Route exact path="/poem">
                                <PoemPage word={word} />
                            </Route>
                            <Route path="*">
                                <Page404 />
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;