import { userEvent } from "@testing-library/user-event";
import Card from "..";
import { render, screen } from "../../../../utils/test-utils";

const mockedFn = jest.fn();

describe("<Card />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly unclickable card", async () => {
    const { container } = render(
      <Card
        imgProps={{ src: "some-awsome.jpg", alt: "awsome description" }}
        title="Awsome image"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render correctly clickable card", async () => {
    const { container } = render(
      <Card
        imgProps={{ src: "some-awsome.jpg", alt: "awsome description" }}
        title="Awsome image"
        onClick={mockedFn}
        clickable
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("should call function when clicked", async () => {
    render(
      <Card
        imgProps={{ src: "some-awsome.jpg", alt: "awsome description" }}
        title="Awsome image"
        onClick={mockedFn}
        clickable
      />
    );

    const card = screen.getByRole("button", {
      name: /awsome description/i,
    });

    await userEvent.click(card);

    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
