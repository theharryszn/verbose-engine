import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders form", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Your name");
  expect(input).toBeInTheDocument();
});
