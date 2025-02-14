import React, { SetStateAction, useState, Dispatch } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Button } from "./common/Button";
import { Radio } from "./common/Radio";
import { RoomFilters } from "@/model/roomModel";
import { set } from "date-fns";

interface SortingModalProps {
  modalVisible: boolean;
  onClose: () => void;
  sort: RoomFilters[];
  handleSetSort: (filters: RoomFilters[]) => void;
}

export default function SortingModal({
  modalVisible,
  onClose,
  sort,
  handleSetSort,
}: SortingModalProps) {
  const [selectedFilter, setSelectedFilter] = useState<RoomFilters[]>([]);
  const filterOptions = Object.values(RoomFilters).filter(
    (k) => k !== RoomFilters.Level
  );

  const handleFilter = (filter: RoomFilters) => {
    if (selectedFilter.includes(filter)) {
      setSelectedFilter(selectedFilter.filter((item) => item !== filter));
    } else {
      setSelectedFilter([...selectedFilter, filter]);
    }
  };

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection="down"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ margin: 0, justifyContent: "flex-end" }}
      onDismiss={() => {
        setSelectedFilter([]);
      }}
      onShow={() => {
        const prevFilters = sort.filter((item) => item !== RoomFilters.Level);
        setSelectedFilter([...prevFilters]);
      }}
    >
      <View className="bg-white rounded-t-2xl p-4 h-1/2">
        <View className="flex-grow">
          {/* Drag handle */}
          <View className="w-10 h-1 bg-gray-400 self-center mb-3 rounded-full" />

          <Text className="text-lg font-semibold text-center mb-4">Sort</Text>

          {/* Sorting Options */}
          {filterOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-2 px-4"
              onPress={() => handleFilter(item)}
            >
              <Text className="text-base">{item}</Text>
              <Radio
                isChecked={selectedFilter.includes(item)}
                key={RoomFilters[item]}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <View className="flex-row justify-between gap-x-4">
          <Button
            text={"Reset"}
            className="bg-gray-700 w-1/3 h-14"
            onPress={() => {
              handleSetSort([]);
              setSelectedFilter([]);
            }}
          />
          <Button
            text={"Apply"}
            className="bg-blue-600 w-2/3 h-14"
            onPress={() => {
              handleSetSort([...selectedFilter]);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}
