import { screen, render, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

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
