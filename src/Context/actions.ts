import { SET_SW_DATA, SetSWDataAction } from "./types";
import { StoreKeyType, StoreType } from "../types";

const setSWDataAction = (key: StoreKeyType, values: StoreType[typeof key]): SetSWDataAction => ({
  type: SET_SW_DATA,
  payload: {
    key,
    values
  }
})

export {
  setSWDataAction
}


