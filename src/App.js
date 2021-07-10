import React from "react";
// Glpbal Styles:
import GlobalStyle from "./components/GlobalStyle";
// Import Pages:
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
