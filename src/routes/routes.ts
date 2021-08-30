import { Home } from "../views/Home/Home";
import { Description } from "../views/Description/Description";
import { Navbar } from "../layout/Navbar";
import { DescriptionProvider } from "../context/descriptionContext";
import { NotFound } from "../components/NotFound/NotFound";
import { GridProvider } from "../context/gridContext";
import { RouteInterface } from "../interfaces/Route.interface";
export const routes: RouteInterface[] = [
  {
    path: "/",
    component: Home,
    layout: Navbar,
    provider: GridProvider,
    exact: true,
  },
  {
    path: "/description/:prefix",
    component: Description,
    layout: Navbar,
    provider: DescriptionProvider,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
    layout: Navbar,
  },
];
