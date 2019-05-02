import "./style/index.scss";

import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducersApp from "./reducers";
import App from "./App";
import Spinner from "reactstrap/lib/Spinner";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import ModalInfo from "./components/modal/modal-info.connector";

const reducersAppStore = createStore(reducersApp);
const Loader = () => (
    <div className="spinner">
        <Spinner
            color="primary"
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
        />
    </div>
);

ReactDOM.render(
    <Provider store={reducersAppStore}>
        <Suspense fallback={<Loader />}>
            <ModalInfo />
            <App />
        </Suspense>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
