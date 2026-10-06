import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isFetching) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="flex-1 mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/*CAROUSEL*/}
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />

        {/*Popular*/}
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title="Populares"
        />

        {/*Top Rated*/}
        <MovieHorizontalList movies={topRatedQuery.data ?? []} title="TOP" />

        {/*Upcoming*/}
        <MovieHorizontalList
          movies={upcomingQuery.data?.pages.flat() ?? []}
          title="Proximamente"
          loadNextPage={upcomingQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
