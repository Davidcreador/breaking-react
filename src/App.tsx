import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './tailwind.generated.css';

import Home from './pages/home';
import Episodes from './pages/episodes';
import { Navigation } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container mx-auto">
          <Switch>
            <Route path="/episodes">
              <Episodes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
