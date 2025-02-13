import React, { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from "react-native-date-picker";

const DateInput = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextInput value={date.toString()} onFocus={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DateInput;
