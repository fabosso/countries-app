import { Home } from "../views/Home/Home";
import { Description } from "../views/Description";
import { Navbar } from "../layout/Navbar";
import { CountriesProvider } from "../context/countriesContext";
export const routes = [
  {
    path: "/",
    component: Home,
    layout: Navbar,
    exact: true,
  },
  {
    path: "/description/:prefix",
    component: Description,
    layout: Navbar,
    provider: CountriesProvider,
    exact: true,
  },
];
