import { Airplay } from "@tamagui/lucide-icons";
import { Button, Heading, View } from "tamagui";
import { router } from "expo-router";
import { isStoryBookEnabled } from "../storybook";

export default function TabOneScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Heading size={"$10"} color={"violet"}>
        Tab One
      </Heading>

      <Button
        color={"violet"}
        backgroundColor={"black"}
        alignSelf="center"
        icon={Airplay}
        mt={10}
        size="$6"
      >
        Button
      </Button>

      {isStoryBookEnabled ? (
        <Button
          color={"violet"}
          onPress={() => {
            router.replace("/storybook");
          }}
          backgroundColor={"black"}
          alignSelf="center"
          icon={Airplay}
          mt={10}
          size="$6"
        >
          Go to Storybook
        </Button>
      ) : null}
    </View>
  );
}