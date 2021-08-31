import React from "react";

export interface RouteInterface {
  path: string;
  component: React.FC | any;
  layout: ({
    children,
  }: {
    children: React.ReactElement;
  }) => React.ReactElement;
  exact?: boolean;
  provider?: React.FC;
}
