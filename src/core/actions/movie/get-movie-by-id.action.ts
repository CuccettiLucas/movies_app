import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mappers";

export const getMovieByIdAction = async (id: number) => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
