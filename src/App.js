
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
   
    <BrowserRouter>
    <Switch>
      {
        routes.map((route, index)=>(
          <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render = {(props)=>(
           
            <route.component { ...props }/>
            
          )}
          />
        ))
      }
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
