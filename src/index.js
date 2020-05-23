import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Sections from "views/Sections.js";
import BlogPost from "views/examples/BlogPost.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Sections {...props} />} />
      <Route path="/movie/:id" render={props => <BlogPost {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
