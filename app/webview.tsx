import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Webview() {
  const { url } = useLocalSearchParams();
  const link = decodeURIComponent(url as string);

  return <WebView className="flex-1" source={{ uri: link }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
