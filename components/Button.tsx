import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export function Button({ text, onClick, className }: ButtonProps) {
  return (
    <TouchableOpacity
      className={` px-6 py-2 rounded-full items-center justify-center ${className}`}
    >
      <Text className="text-white text-center items-center font-bold">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
