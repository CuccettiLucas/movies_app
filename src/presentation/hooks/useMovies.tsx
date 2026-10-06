import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/topRated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24hs
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24hs
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, // 24hs
  });

  const upcomingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "upcoming"],
    queryFn: ({ pageParam }) => {
      // console.log(pageParam);
      return upcomingMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24hs,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
