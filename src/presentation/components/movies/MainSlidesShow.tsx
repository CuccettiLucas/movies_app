import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useWindowDimensions, View } from "react-native";
import { Carousel } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const SLIDE_HEIGHT = 250;
const ITEM_WIDTH_RATIO = 0.62;
const HORIZONTAL_PADDING = 8;

const MainSlidesShow = ({ movies }: Props) => {
  const { width } = useWindowDimensions();
  const itemWidth = 200;

  return (
    <View style={{ height: SLIDE_HEIGHT, width: "100%" }}>
      <Carousel
        testID="main-slides-show"
        style={{ width, height: SLIDE_HEIGHT }}
        contentContainerStyle={{ justifyContent: "center" }}
        itemSize={itemWidth}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        defaultIndex={movies.length > 1 ? 1 : 0}
        loop
        layout={{
          type: "parallax",
          scale: 1,
          offset: HORIZONTAL_PADDING * 2,
          adjacentScale: 0.9,
        }}
        animation={{ type: "timing", duration: 500 }}
        snapMode="page"
        // onSnapToItem={(index) => console.log("Película actual:", index)}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            backdrop={item.poster}
            title={item.title}
            itemWidth={itemWidth}
            horizontalPadding={HORIZONTAL_PADDING}
            smallPoster={false}
          />
        )}
      />
    </View>
  );
};

export default MainSlidesShow;
