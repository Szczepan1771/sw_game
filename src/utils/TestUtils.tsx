import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "../Context";

const mockStore = {
  people: [],
  starships: []
}

const customRender = (ui: JSX.Element, options = {}) => {
  return render(
    <Provider initialValues={mockStore}>
      {ui}
    </Provider>
  )
}

export * from "@testing-library/react";
export { customRender as render };