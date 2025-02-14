import { render } from "@testing-library/react-native";

import RoomCard from "@/components/RoomCard";
import {
  ROOM_DATA,
  DATETIME_AVAILABLE,
  DATETIME_NOT_AVAILABLE,
} from "@/constants/room";

describe("<RoomCard />", () => {
  test("Test roomcard rendered correctly", () => {
    const { getByTestId } = render(
      <RoomCard room={ROOM_DATA} dateTime={DATETIME_AVAILABLE} />
    );

    expect(getByTestId("room-name")).toHaveTextContent(ROOM_DATA.name);
    expect(getByTestId("room-availability")).toHaveTextContent("Available");
    expect(getByTestId("room-level")).toHaveTextContent(
      `Level ${ROOM_DATA.level}`
    );
    expect(getByTestId("room-capacity")).toHaveTextContent(
      `${ROOM_DATA.capacity} Pax`
    );
  });

  test("Availability shown correctly", () => {
    const { getByTestId } = render(
      <RoomCard room={ROOM_DATA} dateTime={DATETIME_NOT_AVAILABLE} />
    );

    expect(getByTestId("room-availability")).toHaveTextContent("Not Available");
  });
});
