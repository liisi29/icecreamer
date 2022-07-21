import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import SummaryForm, { texts } from "../SummaryForm";

describe("First", () => {
  test("Checkbox should exist on page", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  test("Checkbox should initially be unchecked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
  test("Button should exist on page", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Button should  inititially be disabled", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("Clicking on checkbox should enable button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
  test("Clicking on checkbox again should enable the button again", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});

describe("Does userevent work?", () => {
  test("Testing userEvent", () => {
    render(<SummaryForm />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox");
    user.click(checkbox);
  });

  // inlining
  test("trigger some awesome feature when clicking the button", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    await user.click(checkbox);
    expect(button).toBeEnabled();

    // ...assertions...
  });
});

describe("Popovers", () => {
  // inlining
  test("At first there is no popover", async () => {
    render(<SummaryForm />);
    console.log("texts.noIcecream", texts.noIcecream);
    const nullPopover = screen.queryByText(texts.noIcecream);
    expect(nullPopover).not.toBeInTheDocument();
  });
  // inlining
  test("Popover appears when hovering over checkbox label", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const termsAndConditionsLabel = screen.getByText(texts.terms);
    await user.hover(termsAndConditionsLabel);
    const noIceCreamWarning = screen.getByText(texts.noIcecream);
    expect(noIceCreamWarning).toBeInTheDocument();
  });
  // inlining
  test("Popover disapears when unhovering over checkbox label", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const termsAndConditionsLabel = screen.getByText(texts.terms);
    await user.hover(termsAndConditionsLabel);
    const noIceCreamWarning = screen.getByText(texts.noIcecream);
    await user.unhover(termsAndConditionsLabel);
    expect(noIceCreamWarning).not.toBeInTheDocument();
  });
  // inlining
  test("testz", async () => {
    // const user = userEvent.setup();
    // const reg = /no ice cream will actually be/i;
    // render(<SummaryForm />);
    // const nullPopover = screen.getAllByText(reg);
    // expect(nullPopover).not.toBeInTheDocument();
    // const termsAndConditions = screen.getByText(/terms and conditions/i);
    // user.hover(termsAndConditions);
    // const popover = screen.getByText(reg);
    // expect(popover).toBeInTheDocument();
  });
});
