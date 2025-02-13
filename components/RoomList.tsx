import React from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { RoomModel } from "@/model/roomModel";
import RoomCard from "./RoomCard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RoomList({ dateTime }: { dateTime: Date }) {
  const { data, error } = useQuery<RoomModel[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/yuhong90/7ff8d4ebad6f759fcc10cc6abdda85cf/raw/463627e7d2c7ac31070ef409d29ed3439f7406f6/room-availability.json"
      );
      return response.json();
    },
  });

  const isWithinTime = (dateTime: Date): boolean => {
    // filter time such that it falls within the range of the room's availability
    console.log(dateTime.getHours());
    if (dateTime.getHours() < 8 || dateTime.getHours() > 19) {
      return false;
    }

    if (dateTime.getHours() == 19 && dateTime.getMinutes() > 30) {
      return false;
    }

    return true;
  };

  return (
    <View className="py-10">
      <View className="flex flex-row justify-between">
        <Text className="text-slate-400">Rooms</Text>
        <Pressable className="flex flex-row items-center gap-x-2">
          <Text className="font-bold">Sort</Text>
          <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View className="gap-y-2 p-2">
          {isWithinTime(dateTime) ? (
            data?.map((room, i) => (
              <RoomCard room={room} dateTime={dateTime} key={i} />
            ))
          ) : (
            <Text className="font-bold">No Available Rooms</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
