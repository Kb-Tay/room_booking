import { Pressable, ScrollView, View, Text } from "react-native";
import DateInput from "@/components/DateInput";
import RoomList from "@/components/RoomList";
import { useState } from "react";
import SortingModal from "@/components/SortingModal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import "../global.css";

export default function Index() {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <ScrollView className="px-6 py-2 bg-white">
      <View className="gap-y-4">
        <DateInput type="date" dateTime={dateTime} setDateTime={setDateTime} />
        <DateInput type="time" dateTime={dateTime} setDateTime={setDateTime} />
      </View>
      <RoomList dateTime={dateTime} />
    </ScrollView>
  );
}
