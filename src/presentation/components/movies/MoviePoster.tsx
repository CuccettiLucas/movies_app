import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface Props {
  id: number;
  poster?: string;
  backdrop: string;
  title: string;
  itemWidth: number;
  horizontalPadding: number;
  smallPoster?: boolean;
  className?: string;
}

const SMALL_POSTER_ASPECT_RATIO = 1;

const MoviePoster = ({
  id,
  poster,
  backdrop,
  title,
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
      <Pressable
        className={pressableClassName}
        onPress={() =>
          router.push({
            pathname: "/movie/[id]",
            params: { id },
          })
        }
        style={{
          flex: smallPoster ? undefined : 1,
          aspectRatio: smallPoster ? SMALL_POSTER_ASPECT_RATIO : undefined,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "#e5e7eb",
        }}
      >
        <Image
          source={backdrop}
          style={{ flex: 1, width: "100%" }}
          contentFit="cover"
          accessibilityLabel={title}
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
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MoviePoster;
