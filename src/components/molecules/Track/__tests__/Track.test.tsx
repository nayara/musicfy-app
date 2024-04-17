import { render } from "../../../../utils/test-utils";
import Track from "..";

const mockedItems = [
  {
    type: "playlist",
    id: "37i9dQZF1DXdPec7aLTmlC",
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

describe("<Track />", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Track title="Some awsome track" contentsItems={mockedItems} />
    );

    expect(container).toMatchSnapshot();
  });
});
