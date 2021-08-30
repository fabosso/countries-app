import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";
import { GlobalProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => {
                if (route.provider) {
                  return (
                    <route.provider>
                      <route.layout>
                        <route.component {...props} />
                      </route.layout>
                    </route.provider>
                  );
                } else {
                  return (
                    <route.layout>
                      <route.component {...props} />
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
