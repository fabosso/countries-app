import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { CountriesProvider } from "./context/countriesContext";
import { ThemeProvider } from "./context/themeContext";
import Description from "./views/Description";
import Home from "./views/Home";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          {/* TODO: replace with <Route path="/"> */}
          <Route path="/placeholder-home">
            <Home />
          </Route>
          {/* TODO: replace with <Route path="/description/:id" or sth> */}
          <Route exact path="/">
            <CountriesProvider>
              <Description />
            </CountriesProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
