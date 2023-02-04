import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Navbar from "./navbar";
import store from "../store/index";
import "@testing-library/jest-dom";

describe("Navbar component", () => {
  it("renders the hamburger and close icons", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const hamburgerIcon = getByTestId("hamburger-icon");
    const closeIcon = getByTestId("close-icon");
    expect(hamburgerIcon).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });
});
