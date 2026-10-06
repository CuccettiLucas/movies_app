import { movieApi } from "@/core/api/movie-api";
import { CastDBResponse } from "@/infrastructure/interfaces/castdb-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mappers";

export const getCastByMovie = async (id: number) => {
  try {
    const { data } = await movieApi.get<CastDBResponse>(`/${id}/credits`);
    return CastMapper.fromTheCreditsDbToCast(data.cast);
  } catch (error) {
    console.log(error);
    throw "Cannot load Cast by movie";
  }
};
