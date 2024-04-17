import { useGetHome } from "../../../api/queries/use-get-home";
import Track from "../../../components/molecules/Track";
import * as Style from "./Home.styles";

const Home = () => {
  const { data } = useGetHome();

  if (!data) return <></>;

  return (
    <Style.Container>
      {data.sections.items.map((item, index) => {
        return (
          <Style.TrackWrapper key={`section-${index}`}>
            {item.contents.items.length > 0 && (
              <Track
                title={item.title}
                contentsItems={item.contents.items}
                key={`track-${index}`}
              />
            )}
          </Style.TrackWrapper>
        );
      })}
    </Style.Container>
  );
};

export default Home;
