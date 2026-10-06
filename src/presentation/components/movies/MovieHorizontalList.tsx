import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;

  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    // console.log("Cargar siguiente peliculas");
    loadNextPage && loadNextPage();
  };

  return (
    <View>
      {title && <Text className="text-3xl font-bold px-2 pt-10">{title}</Text>}

      <FlatList
        className="mt-5"
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            title={item.title}
            backdrop={item.backdrop}
            itemWidth={200}
            horizontalPadding={8}
            smallPoster
          />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
