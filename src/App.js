import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { CountriesProvider } from "./context/countriesContext";
import Description from "./views/Description";
import Home from "./views/Home";

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Switch>
          {/* TODO: replace with <Route path="/"> */}
          <Route path="/placeholder-home">
            <Home />
          </Route>
          {/* TODO: replace with <Route path="/description/:id" or sth> */}
          <Route exact path="/">
            <Description />
          </Route>
        </Switch>
      </BrowserRouter>
    </CountriesProvider>
  );
}

export default App;
