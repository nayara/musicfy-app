import HomePage from "..";
import { render, screen } from "../../../utils/test-utils";

jest.mock("react-router-dom");

describe("<HomePage>", () => {
  it("should render page correctly", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Home Page" })
    ).toBeInTheDocument();
  });
});
