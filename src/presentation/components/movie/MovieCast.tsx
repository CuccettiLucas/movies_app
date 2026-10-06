import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { View } from "react-native";
import CastHorizontalList from "../movies/CastHorizontalList";

interface Props {
  cast: Cast[];
  loadNextPage: () => void;
}

const MovieCast = ({ cast, loadNextPage }: Props) => {
  return (
    <View>
      <CastHorizontalList
        castList={cast}
        title="Casting"
        loadNextPage={loadNextPage}
      />
    </View>
  );
};

export default MovieCast;
