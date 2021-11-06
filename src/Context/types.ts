import { StoreKeyType, StoreType } from "../types";

const SET_SW_DATA = "SET_SW_DATA";

type PayloadSetSWDataActionType = {
  key: StoreKeyType,
  values: StoreType[PayloadSetSWDataActionType["key"]]
}

type SetSWDataAction = {
  type: typeof SET_SW_DATA,
  payload: PayloadSetSWDataActionType
}

type ActionsType = SetSWDataAction

export {
  SET_SW_DATA,
};

export type {
  SetSWDataAction,
  ActionsType
};

