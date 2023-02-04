import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";
import "@testing-library/jest-dom";

test("renders the 'Fakesite' and 'Account' sections", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Fakesite")).toBeInTheDocument();
  expect(getByText("Account")).toBeInTheDocument();
});

test("renders the correct links in 'Fakesite' section", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("About us")).toBeInTheDocument();
  expect(getByText("Press")).toBeInTheDocument();
  expect(getByText("Policies")).toBeInTheDocument();
  expect(getByText("Help")).toBeInTheDocument();
});

test("renders the correct links in 'Account' section", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Edit Profile")).toBeInTheDocument();
  expect(getByText("Friends")).toBeInTheDocument();
  expect(getByText("Social")).toBeInTheDocument();
  expect(getByText("Delete Profile")).toBeInTheDocument();
});

test("renders the 'Terms', 'Privacy', and 'Site Map' links", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Terms")).toBeInTheDocument();
  expect(getByText("Privacy")).toBeInTheDocument();
  expect(getByText("Site Map")).toBeInTheDocument();
});

test("renders the logo image", () => {
  const { getByAltText } = render(<Footer />);
  expect(getByAltText("logo footer")).toBeInTheDocument();
});
