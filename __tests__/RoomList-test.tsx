import { render } from "@testing-library/react-native";
import RoomList from "@/components/RoomList";
import { DATETIME } from "@/constants/datetime";
import { ROOM_DATA, ROOM_LIST } from "@/constants/room";
import useRoomsQuery from "@/queries/useRoomsQuery";

// const mock_data = ROOM_LIST;
// jest.mock("../queries/useRoomsQuery", () => ({
//   useRoomsQuery: jest.fn().mockReturnValue({
//     data: mock_data,
//     isLoading: false,
//     isError: false,
//   }),
// }));
// jest.mock("../queries/useRoomsQuery");

// // // Mock the return value of useRoomsQuery
// (useRoomsQuery as jest.Mock).mockReturnValue({
//   data: mock_data,
//   isLoading: false,
//   isError: false,
// });

describe("<RoomList />", () => {
  // const queryClient = new QueryClient();
  // const renderComponent = (dateTime: Date) =>
  //   render(
  //     // <QueryClientProvider client={queryClient}>
  //     <RoomList dateTime={dateTime} />
  //     // </QueryClientProvider>
  //   );
  test("Renders Room List", () => {
    // const { getByText } = renderComponent(DATETIME);
    // // Verify that room names are displayed
    // ROOM_LIST.forEach((room) => {
    //   expect(getByText(room.name)).toBeTruthy();
    // });
  });
});
