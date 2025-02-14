import { Pressable, ScrollView, View, Text } from "react-native";
import DateInput from "@/components/common/DateInput";
import RoomList from "@/components/RoomList";
import { useState } from "react";

import "../global.css";
import { Link } from "expo-router";

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
