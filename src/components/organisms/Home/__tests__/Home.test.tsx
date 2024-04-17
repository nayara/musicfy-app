import { render } from "../../../../utils/test-utils";
import Home from "..";

describe("<Home />", () => {
  it("should render home correctly", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
