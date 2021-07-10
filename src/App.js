import React from "react";
// Glpbal Styles:
import GlobalStyle from "./components/GlobalStyle";
// Import Pages:
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
import MovieDetails from "./pages/MovieDetails";

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
        <Route exact path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
