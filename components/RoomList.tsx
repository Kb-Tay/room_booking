import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { RoomFilters, RoomModel } from "@/model/roomModel";
import RoomCard from "./RoomCard";
import SortingModal from "./SortingModal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { format } from "date-fns";

export default function RoomList({ dateTime }: { dateTime: Date }) {
  const { data = [], error } = useQuery<RoomModel[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/yuhong90/7ff8d4ebad6f759fcc10cc6abdda85cf/raw/463627e7d2c7ac31070ef409d29ed3439f7406f6/room-availability.json"
      );
      return response.json();
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [sort, setSort] = useState<RoomFilters[]>([RoomFilters.Level]);

  const timeSelected = format(dateTime, "HH:mm");

  const isWithinTime = (dateTime: Date): boolean => {
    // filter time such that it falls within the range of the room's availability
    if (dateTime.getHours() < 8 || dateTime.getHours() > 19) {
      return false;
    }

    if (dateTime.getHours() == 19 && dateTime.getMinutes() > 30) {
      return false;
    }

    return true;
  };

  const handleSetSort = (filters: RoomFilters[]) => {
    setSort([...filters, RoomFilters.Level]);
  };

  const sortRooms = (rooms: RoomModel[], sort: RoomFilters[]): RoomModel[] => {
    // write a function that sorts by filter 1, then filter 2, then filter 3
    rooms.sort((a, b) => {
      for (const filter of sort) {
        let comparison = 0;

        if (filter === RoomFilters.Capacity) {
          comparison = b.capacity - a.capacity;
        } else if (filter === RoomFilters.Availability) {
          comparison =
            parseInt(b.availability[timeSelected], 10) -
            parseInt(a.availability[timeSelected], 10);
        } else if (filter === RoomFilters.Level) {
          comparison = a.level - b.level;
        }

        if (comparison !== 0) return comparison; // Move to the next filter only if equal
      }
      return 0;
    });

    return rooms;
  };

  return (
    <View>
      <View className="flex flex-row justify-between pt-10">
        <Text className="text-slate-400">Rooms</Text>
        <Pressable
          className="flex flex-row items-center gap-x-2"
          onPress={() => setModalVisible(true)}
        >
          <Text className="font-bold">Sort</Text>
          <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
        </Pressable>
      </View>
      <View className="gap-y-2 p-2">
        {isWithinTime(dateTime) ? (
          sortRooms(data, sort).map((room, i) => (
            <RoomCard room={room} dateTime={dateTime} key={i} />
          ))
        ) : (
          <Text className="font-bold">No Available Rooms</Text>
        )}
      </View>
      <SortingModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        sort={sort}
        handleSetSort={handleSetSort}
      />
    </View>
  );
}
