import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
  className?: string;
}

export function Button({ text, onPress, className }: ButtonProps) {
  return (
    <TouchableOpacity
      className={` px-6 py-2 rounded-full items-center justify-center ${className}`}
      onPress={onPress}
    >
      <Text className="text-white text-center items-center font-bold">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
