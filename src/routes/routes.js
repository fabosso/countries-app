
   
import { Home } from "../views/Home/Home";
export const routes = [
    {
        path:"/",
        component: Home,
        /* layout: NavBar, */
        exact: true
    },/* {
        path:"/description/:prefix",
        component: Description,
        layout: NavBar,
        exact: true
    } */
]
