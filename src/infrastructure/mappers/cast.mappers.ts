import { Cast } from "../interfaces/cast.interface";
import { CastResult } from "../interfaces/castdb-response";

export class CastMapper {
  static fromTheCreditsDbToCast = (castList: CastResult[]): Cast[] => {
    return castList.map((cast) => ({
      id: cast.id,
      name: cast.name,
      character: cast.character ?? "No disponible",
      avatar: cast.profile_path
        ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
        : `https://i.stack.imgur.com/l60Hf.png`,
    }));
  };
}
