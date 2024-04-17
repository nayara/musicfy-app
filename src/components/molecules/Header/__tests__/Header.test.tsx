import { render } from "../../../../utils/test-utils";
import Header from "..";

jest.mock("react-router-dom");

describe("<Header />", () => {
  it("should render header correcly", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
