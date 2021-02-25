import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./storage/store";
import * as serviceWorker from "./serviceWorker";
import Application from "./view/Application";
import Counter from "./view/Counter";
import Error404 from "./view/Error404";
import "./index.css";
import TranslationList from "./view/TranslationList";
import TranslationDetails from "./view/TranslationDetails";
import TranslationAdd from "./view/TranslationAdd";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Link to="/translations">Liste</Link>
        <Link to="/translation/add">Ajouter</Link>
        <Switch>
          <Route exact path="/" component={Application} />
          <Route exact path="/translations" component={TranslationList} />
          <Route exact path="/translation/add" component={TranslationAdd} />
          <Route exact path="/translation/:id" component={TranslationDetails} />
          <Route exact path="/counter" component={Counter} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
