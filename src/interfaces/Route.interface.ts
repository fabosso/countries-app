import React from "react";


export interface RouteInterface {
  path: string;
  component: React.FC;
  layout:({children}:{children:React.ReactElement})=> React.ReactElement;
  exact?: Boolean;
  provider?: React.FC;
}
