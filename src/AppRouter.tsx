import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/404/404";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";
import Upload from "./pages/Upload";
import AIGhat from "./pages/AIGhat";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AIGhat} />
        <Route path="/v1/chen" exact component={Test2} />
        <Route path="/v1/chen/2" exact component={Test} />
        <Route path="/v1" exact component={Login} />
        <Route path="/v1/login" component={Login} />
        <Route path="/v1/home" component={Home} />
        <Route path="/v1/upload" component={Upload} />
        <Route path="/v1/chat/ai" component={AIGhat} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
