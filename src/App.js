import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "react-jss";

// CSS Stylesheets
import "Stylesheets/App.css";

// Pages
import HomePage from "Pages/HomePage";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
