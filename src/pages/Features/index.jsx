import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Management from "./Management";
import BookAdd from "./BookAdd";
import BookDetail from "./BookDetail";
import BookEdit from "./BookEdit";

function Features() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/book-management/add">
          <BookAdd />
        </Route>
        <Route exact path="/book-management/:id">
          <BookDetail />
        </Route>
        <Route exact path="/book-management/:id/edit">
          <BookEdit />
        </Route>
        <Route path="/book-management">
          <Management />
        </Route>
      </Switch>
    </>
  );
}

export default Features;
