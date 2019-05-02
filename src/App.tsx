import React, { Component } from "react";
import _ from "lodash";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageContainer from "./containers/page-container/page-container.connector";
import TopBar from "./containers/top-bar/top-bar.connector";

interface MyProps { }
interface MyState { }

class App extends Component<MyProps, MyState> {

    render = () => {

        return (
            <div className="App">
                <Router basename="/">
                    <div className="app-content">
                        <TopBar />
                        <PageContainer />
                    </div>
                </Router>
            </div>
        );
    };
}

export default (App);
