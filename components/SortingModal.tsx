import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";

import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "./Button";

export default function SortingModal({
  modalVisible,
  onClose,
}: {
  modalVisible: boolean;
  onClose: () => void;
}) {
  const { height } = Dimensions.get("window");
  const filters = ["Location", "Capacity", "Availability"];

  return (
    <Modal
      isVisible={modalVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection="down"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View className="bg-white rounded-t-2xl p-4 h-1/2">
        <View className="flex-grow">
          {/* Drag handle */}
          <View className="w-10 h-1 bg-gray-400 self-center mb-3 rounded-full" />

          <Text className="text-lg font-semibold text-center mb-4">Sort</Text>

          {/* Sorting Options */}
          {filters.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-2 px-4"
            >
              <Text className="text-base">{item}</Text>
              <View className="w-5 h-5 border border-gray-400 rounded-full" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <View className="flex-row justify-between gap-x-4">
          <Button
            text={"Reset"}
            className="bg-gray-700 w-1/3 h-14"
            onClick={() => {}}
          />
          <Button
            text={"Apply"}
            className="bg-blue-600 w-2/3 h-14"
            onClick={() => {}}
          />
        </View>
      </View>
    </Modal>
  );
}
