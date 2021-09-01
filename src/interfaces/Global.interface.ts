import { History, LocationState } from "history";
import { Dispatch, SetStateAction } from "react";

export type BorderItem = {
  code: string;
  name: string;
};

export type callBackFcn = (borders: BorderItem[]) => BorderItem[] | null;

export type updateLastVisitedType = (
  code: string,
  history: History<LocationState>
) => void;

export interface useGlobalTypes {
  darkModeHandler: () => void;
  setTransitions: Dispatch<SetStateAction<boolean>>;
  lastVisited: string[];
  updateLastVisited: updateLastVisitedType;
  borders: BorderItem[] | null;
  setBorders: any;
  theme: string;
}
