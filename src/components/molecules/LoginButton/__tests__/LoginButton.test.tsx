import LoginButton from "..";
import { render } from "../.../../../../../utils/test-utils";

describe("<LoginButton />", () => {
  it("should render login button corretly", () => {
    const { container } = render(<LoginButton />);

    expect(container).toMatchSnapshot();
  });
});
