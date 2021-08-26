import { Header } from "../components/Header/Header";
type NavbarParams = {
  children: JSX.Element;
};
export const Navbar = ({ children }: NavbarParams): JSX.Element => {
  return <Header>{children}</Header>;
};
