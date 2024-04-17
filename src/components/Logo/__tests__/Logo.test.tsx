import { render, screen } from "../../../utils/test-utils";
import { userEvent } from "@testing-library/user-event";
import Logo from "..";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("<Logo>", () => {
  it("should render logo correctly", () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });

  it("should redirect to rootPath when clicked", async () => {
    render(<Logo />);

    const logoButton = screen.getByRole("button", { name: "MusicFy" });
    await userEvent.click(logoButton);

    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
