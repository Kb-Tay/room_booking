import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import "../global.css";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import DateInput from "@/components/DateInput";

export default function Index() {
  return (
    <ScrollView>
      <View className="">
        <Text className="text-slate-400">Date</Text>
        <DateInput />
      </View>
      <View>
        <Text className="text-red-600">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </ScrollView>
  );
}
