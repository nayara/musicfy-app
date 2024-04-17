import { render, screen } from "../../../../utils/test-utils";
import Track from "..";
import userEvent from "@testing-library/user-event";

const mockedItems = [
  {
    type: "playlist",
    id: "some-id",
    name: "Happy Hits!",
    shareUrl: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
    description: "Hits to boost your mood and fill you with happiness!",
    owner: {
      type: "user",
      name: "Spotify",
    },
    images: [
      [
        {
          url: "https://i.scdn.co/image/ab67706f00000002b55b6074da1d43715fc16d6d",
          width: null,
          height: null,
        },
      ],
    ],
  },
];

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("<Track />", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Track title="Some awsome track" contentsItems={mockedItems} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should redirect to playlist page when playlist card is clicked", async () => {
    render(<Track title="Some awsome track" contentsItems={mockedItems} />);

    const cardButton = screen.getByRole("button", {
      name: /Playlist Happy Hits!/i,
    });

    await userEvent.click(cardButton);

    expect(mockNavigate).toHaveBeenCalledWith("/playlist/some-id");
  });
});
