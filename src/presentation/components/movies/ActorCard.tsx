import { Image } from "expo-image";
import { Text, View } from "react-native";

interface Props {
  id: number;
  name: string;
  character: string;
  avatar: string;
  itemWidth: number;
  horizontalPadding: number;
  smallPoster?: boolean;
  className?: string;
}

const SMALL_POSTER_ASPECT_RATIO = 1;

const ActorCard = ({
  id,
  name,
  character,
  avatar,
  itemWidth,
  horizontalPadding,
  smallPoster = false,
  className,
}: Props) => {
  const pressableClassName = ["active:opacity-90", className]
    .filter(Boolean)
    .join(" ");

  return (
    <View
      style={{
        flex: smallPoster ? undefined : 1,
        width: itemWidth,
        paddingHorizontal: horizontalPadding,
      }}
    >
      <View
        className={pressableClassName}
        style={{
          flex: smallPoster ? undefined : 1,
          aspectRatio: smallPoster ? SMALL_POSTER_ASPECT_RATIO : undefined,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "#e5e7eb",
        }}
      >
        <Image
          source={avatar}
          style={{ flex: 1, width: "100%" }}
          contentFit="cover"
          accessibilityLabel={name}
          transition={200}
        />

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: 12,
            backgroundColor: "rgba(0,0,0,0.45)",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            {character}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ActorCard;
