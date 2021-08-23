import "./App.css";
import { CountriesProvider } from "./context/countriesContext";
import Description from "./views/Description";

function App() {
  return (
    <CountriesProvider>
      <Description />
    </CountriesProvider>
  );
}

export default App;
