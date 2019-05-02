import React, { Component } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard.component";
import Settings from "./components/settings/settings.connector";

interface MyProps extends RouteComponentProps {}
interface MyState {}

class PageContainer extends Component<MyProps, MyState> {
    render = () => {
        return (
            <div
                className="PageContainer"
            >
                <Route path="/" exact component={Dashboard} />
                <Route path="/settings" exact component={Settings} />
            </div>
        );
    };
}

export default PageContainer;
