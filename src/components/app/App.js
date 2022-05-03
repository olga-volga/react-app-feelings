import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from '../header/Header';
import MainPage from '../pages/MainPage';
import PoemPage from '../pages/PoemPage';

import './app.scss';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/poem">
                        <PoemPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;