import React, { useState } from "react";
import { Text, Button, Modal, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { format } from "date-fns";

interface DateInputProps {
  type: "date" | "time";
  dateTime: Date;
  setDateTime: (date: Date) => void;
}

export default function DateInput({
  type,
  dateTime,
  setDateTime,
}: DateInputProps) {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDateTime(selectedDate);
    }
  };

  const getOrdinal = (day: number): string => {
    if (day > 3 && day < 21) return "th"; // Special case for 11th - 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDate = (date: Date, type: "date" | "time"): String => {
    if (type === "date") {
      const day = date.getDate();
      return day + getOrdinal(day) + " " + format(date, "MMM yyyy");
    } else {
      return format(date, "HH:mm a");
    }
  };

  return (
    <View className="gap-y-2">
      <Text className="text-slate-400 capitalize" testID="type">
        {type}
      </Text>
      <Text
        onPress={() => setShow(true)}
        className="w-full border-b border-slate-300 pb-2"
        testID="dt"
      >
        {formatDate(dateTime, type)}
      </Text>
      <Modal visible={show} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <View className="bg-white rounded-lg w-[4/5] justify-center p-3">
            <Text className=" text-slate-600 text-2xl font-bold text-center">
              Select Time
            </Text>

            <DateTimePicker
              value={dateTime}
              mode={type}
              display="spinner" // Use spinner for iOS-like feel
              onChange={onChange}
              minuteInterval={30}
              textColor="black"
              themeVariant="light"
            />

            <Button title="Done" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
