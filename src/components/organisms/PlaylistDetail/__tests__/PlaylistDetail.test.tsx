import { render } from "../../../../utils/test-utils";
import PlalistDetail from "..";

describe("<PlalistDetail />", () => {
  it("should render playlist correctly", () => {
    const { container } = render(<PlalistDetail />);

    expect(container).toMatchSnapshot();
  });
});
