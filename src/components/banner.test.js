import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./banner";

describe("Banner component", () => {
  let mockStore;
  beforeEach(() => {
    mockStore = configureStore([]);
  });

  it("renders without crashing", () => {
    const store = mockStore({ showMenu: false });
    render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );
  });

  it("renders title, banner text and button text", () => {
    const store = mockStore({ showMenu: false });
    render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );

    expect(
      screen.getByText("The world's greatest fake site")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Do something awesome")).toBeInTheDocument();
  });
});
