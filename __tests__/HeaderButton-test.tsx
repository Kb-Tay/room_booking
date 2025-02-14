import { render } from "@testing-library/react-native";

import HeaderButton from "@/components/HeaderButton";

describe("<HeaderButton />", () => {
  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<HeaderButton />);

    getByText("Camera");
  });
});
