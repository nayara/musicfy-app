import { userEvent } from "@testing-library/user-event";
import Card from "..";
import { render, screen } from "../../../../utils/test-utils";

describe("<Card />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", async () => {
    const { container } = render(
      <Card
        imgSrc="some-awsome.jpg"
        altText="awsome description"
        title="Awsome image"
        onClick={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should call function when clicked", async () => {
    const mockedFn = jest.fn();

    render(
      <Card
        imgSrc="some-awsome.jpg"
        altText="awsome description"
        title="Awsome image"
        onClick={mockedFn}
      />
    );

    const card = screen.getByRole("button", {
      name: /awsome description/i,
    });

    await userEvent.click(card);

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
