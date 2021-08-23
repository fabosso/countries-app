import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
