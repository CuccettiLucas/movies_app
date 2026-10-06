import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);
  const movieData = movieQuery.data;
  const castData = castQuery.data;

  if (movieQuery.isLoading || !movieData || !castData) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere Porfavor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="flex-1 pb-10">
        <MovieHeader
          poster={movieData.poster}
          originalTitle={movieData.originalTitle}
          title={movieData.title}
        />
        <MovieDescription movie={movieData} />
        <MovieCast
          cast={castData.pages.flat() ?? []}
          loadNextPage={castQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
