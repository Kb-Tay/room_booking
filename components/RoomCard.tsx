import { View, Text } from "react-native";
import { RoomModel } from "@/model/roomModel";
import { format } from "date-fns";

export default function RoomCard({
  room,
  dateTime,
}: {
  room: RoomModel;
  dateTime: Date;
}) {
  const time = format(dateTime, "HH:mm");
  const isAvailable = room.availability[time] == "1";

  return (
    <View
      className="w-full bg-gray-100 p-4 rounded-xl gap-y-2"
      testID="room-card"
    >
      <View className="flex flex-row justify-between">
        <Text className="font-bold" testID="room-name">
          {room.name}
        </Text>
        {isAvailable ? (
          <Text className="text-green-500 italic" testID="room-availability">
            Available
          </Text>
        ) : (
          <Text className="text-slate-400 italic" testID="room-availability">
            Not Available
          </Text>
        )}
      </View>
      <View className="flex flex-row justify-between">
        <Text testID="room-level">Level {room.level}</Text>
        <Text testID="room-capacity">{room.capacity} Pax</Text>
      </View>
    </View>
  );
}
