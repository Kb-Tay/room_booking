import { View } from "react-native";

export function Radio({ isChecked }: { isChecked: boolean; key?: string }) {
  return (
    <View className="w-5 h-5 border-2 border-gray-400 rounded-full m-1 items-center justify-center">
      {isChecked && <View className=" w-4/5 h-4/5 rounded-full bg-gray-400" />}
    </View>
  );
}
