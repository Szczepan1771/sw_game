import { StoreType } from "../types";
import { ActionsType, SET_SW_DATA } from "./types";

const reducer = (state: StoreType, action: ActionsType) => {
  switch (action.type) {
    case SET_SW_DATA: {
      const {key, values} = action.payload
      return {
        ...state,
        [key]: values
      }
    }
    default: {
      throw new Error(`Action type ${action.type} doesn't exist`)
    }
  }
}

export {
  reducer
}