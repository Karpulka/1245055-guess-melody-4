import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Render Header`, () => {
  const store = mockStore({
    errorCount: 0
  });

  const tree = renderer
    .create(<Provider store={store}>
      <Header />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
