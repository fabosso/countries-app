import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";
import { RouteInterface } from "./interfaces/Route.interface";
import { GlobalProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route: RouteInterface, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={() => {
                if (route.provider) {
                  return (
                    <route.provider>
                      <route.layout>
                        <route.component />
                      </route.layout>
                    </route.provider>
                  );
                } else {
                  return (
                    <route.layout>
                      <route.component />
                    </route.layout>
                  );
                }
              }}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
