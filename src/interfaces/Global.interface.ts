import { History, LocationState } from "history";

export type BorderItem = {
  code: string;
  name: string;
};

type callBackFcn = (borders: BorderItem[]) => BorderItem[];

export type updateLastVisitedType = (
  code: string,
  history: History<LocationState>
) => void;

export interface useGlobalTypes {
  darkModeHandler: () => void;
  setTransitions: (transitions: boolean) => {};
  lastVisited: string[];
  updateLastVisited: updateLastVisitedType;
  borders: BorderItem[] | null;
  setBorders: (callback: callBackFcn) => BorderItem[] | null;
  theme: string;
}
