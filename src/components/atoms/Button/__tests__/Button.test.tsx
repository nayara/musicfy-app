import { userEvent } from "@testing-library/user-event";
import { render, screen } from "../../../../utils/test-utils";
import Button from "..";

describe("<Button />", () => {
  it("should render button correctly", async () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <Button onClick={mockFunction}>Click me!</Button>
    );

    expect(container).toMatchSnapshot();

    const buttonElement = screen.getByRole("button", { name: "Click me!" });

    await userEvent.click(buttonElement);

    expect(mockFunction).toHaveBeenCalled();
  });
});
