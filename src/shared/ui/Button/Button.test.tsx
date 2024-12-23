import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

describe("Buttons", () => {
  test("Default button with text", () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Button with custom theme", () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>Some text</Button>);
    expect(screen.getByText("Some text")).toHaveClass("clear");
    screen.debug();
  });
});
