import { Redirect } from "expo-router";
import StorybookUIRoot from "../.storybook";
import Constants from "expo-constants";

export const isStoryBookEnabled =
  Boolean(Constants?.expoConfig?.extra?.storybookEnabled) === true;

export default function StorybookScreen() {
  if (isStoryBookEnabled) {
    return <StorybookUIRoot />;
  }

  return <Redirect href="/" />;
}