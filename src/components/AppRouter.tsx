import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Blog } from "./blog"
import { Admin } from "./Admin"

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
    </Switch>
  )
}
