export interface RouteInterface {
  path: string;
  component: Function;
  layout: Function;
  exact?: Boolean;
  provider?: Function;
}
