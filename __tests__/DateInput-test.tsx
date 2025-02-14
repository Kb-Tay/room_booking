import { render } from "@testing-library/react-native";

import DateInput from "@/components/common/DateInput";
import { DATETIME, EXPECTED_DATE, EXPECTED_TIME } from "../constants/datetime";

describe("<DateInput />", () => {
  test("Time input format", () => {
    const { getByTestId } = render(
      <DateInput type="time" dateTime={DATETIME} setDateTime={jest.fn()} />
    );

    const title = getByTestId("type");
    expect(title).toHaveTextContent("time");

    const timeInput = getByTestId("dt");
    expect(timeInput).toHaveTextContent(EXPECTED_TIME);
  });

  test("Date input format", () => {
    const { getByTestId } = render(
      <DateInput type="date" dateTime={DATETIME} setDateTime={jest.fn()} />
    );

    const title = getByTestId("type");
    expect(title).toHaveTextContent("date");

    const dateInput = getByTestId("dt");
    expect(dateInput).toHaveTextContent(EXPECTED_DATE);
  });
});
