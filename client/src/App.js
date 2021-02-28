import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './App.css';

/* Site main components */
import Footer from "./components/site/Footer";
import Header from "./components/site/Header";

/* Containers */
import DrinksPage from "./containers/DrinksPage";
import DrinkPage from "./containers/DrinkPage";
import AdminPage from "./containers/AdminPage";
import StatsPage from "./containers/StatsPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <div className="Content">
                    <Route exact path="/" component={DrinksPage}/>
                    <Route path="/drink/:id" component={DrinkPage}/>
                    <Route path="/admin" component={AdminPage}/>
                    <Route path="/stats" component={StatsPage}/>
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
