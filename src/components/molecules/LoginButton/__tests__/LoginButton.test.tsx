import { userEvent } from "@testing-library/user-event";
import LoginButton from "..";
import { render, screen } from "../.../../../../../utils/test-utils";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("<LoginButton />", () => {
  it("should render login button corretly", async () => {
    const { container } = render(<LoginButton />);

    expect(container).toMatchSnapshot();

    const loginButtonElement = screen.getByRole("button", { name: "Login" });

    await userEvent.click(loginButtonElement);

    expect(mockUseNavigate).toHaveBeenCalledWith('/login')
  });
});
