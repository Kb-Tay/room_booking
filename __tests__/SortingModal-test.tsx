import { render } from "@testing-library/react-native";

import SortingModal from "@/components/SortingModal";
import { RoomFilters } from "@/model/roomModel";

const SORT_DATA = [RoomFilters.Capacity];

describe("SortingModal", () => {
  test("Test filters are rendered", () => {
    const { getByText, queryByText } = render(
      <SortingModal
        modalVisible={true}
        onClose={jest.fn()}
        sort={SORT_DATA}
        handleSetSort={jest.fn()}
      />
    );

    expect(getByText("Location")).toBeTruthy();
    expect(getByText("Capacity")).toBeTruthy();
    expect(getByText("Availability")).toBeTruthy();
    expect(queryByText("Level")).toBeFalsy();
  });
});
