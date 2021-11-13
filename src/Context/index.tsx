import React, { useContext, createContext, useReducer } from "react";
import { StoreType } from "../types";
import { ActionsType } from "./types";
import { reducer } from "./reducer";

const initialStore: StoreType = {
  people: [],
  starships: []
}

type ProviderType = {
  initialValues?: StoreType
}

const StoreContext = createContext<StoreType | undefined>(undefined);
const DispatchContext = createContext<React.Dispatch<ActionsType> | undefined>(undefined);

const useStore = (): StoreType => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error("Cannot use Context outside provider")
  }
  return store;
}

const useDispatch = (): React.Dispatch<ActionsType> => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Cannot use ContextDispatch outside Provider');
  }

  return dispatch;
}

const Provider: React.FC<ProviderType> = ({children, initialValues = initialStore}) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  )
}

export {
  Provider,
  useStore,
  useDispatch
}