import { Header } from "../components/Header/Header";
type NavbarParams = {
  children: React.ReactElement;
};
export const Navbar = ({ children }: NavbarParams): React.ReactElement => {
  return <Header>{children}</Header>;
};
