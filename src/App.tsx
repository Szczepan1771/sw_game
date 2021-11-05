import React from 'react';
import './App.css';
import { useGlobalFetch } from "./utils/hooks";
import { Provider } from "./Context";
import Router from "./Router";

function App() {
  const {isLoading} = useGlobalFetch();
  console.log(isLoading);
  return (
    <Provider>
      <Router/>
    </Provider>
  );
}

export default App;
