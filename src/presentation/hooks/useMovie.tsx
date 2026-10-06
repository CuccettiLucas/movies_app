import { getCastByMovie } from "@/core/actions/cast/get-cast-by-movie.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movie", "cast", id],
    queryFn: () => getCastByMovie(id),
    staleTime: 1000 * 60 * 60 * 24, // 24hs,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return { movieQuery, castQuery };
};
