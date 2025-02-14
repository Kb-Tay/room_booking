import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const HeaderButton = () => {
  return (
    <Link href="/camera" asChild>
      <TouchableOpacity>
        <Text>Camera</Text>
        {/* <Ionicons name="camera" size={24} color="black" /> */}
      </TouchableOpacity>
    </Link>
  );
};

export default HeaderButton;
