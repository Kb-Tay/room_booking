import { RoomModel } from "@/model/roomModel";

export const ROOM_DATA: RoomModel = {
  name: "Room 1",
  level: 1,
  capacity: 1,
  availability: {
    "08:00": "1",
    "09:00": "0",
    "10:00": "1",
    "11:00": "0",
    "12:00": "1",
    "13:00": "0",
    "14:00": "1",
    "15:00": "0",
    "16:00": "1",
    "17:00": "0",
  },
};

export const ROOM_LIST: RoomModel[] = [
  {
    name: "Room 1",
    level: 1,
    capacity: 1,
    availability: {
      "08:00": "1",
      "09:00": "0",
      "10:00": "1",
      "11:00": "0",
      "12:00": "1",
      "13:00": "0",
      "14:00": "1",
      "15:00": "0",
      "16:00": "1",
      "17:00": "0",
    },
  },
  {
    name: "Room 2",
    level: 2,
    capacity: 2,
    availability: {
      "08:00": "1",
      "09:00": "1",
      "10:00": "1",
      "11:00": "1",
      "12:00": "1",
      "13:00": "1",
      "14:00": "1",
      "15:00": "1",
      "16:00": "1",
      "17:00": "1",
    },
  },
  {
    name: "Room 3",
    level: 3,
    capacity: 3,
    availability: {
      "08:00": "0",
      "09:00": "0",
      "10:00": "0",
      "11:00": "0",
      "12:00": "0",
      "13:00": "0",
      "14:00": "0",
      "15:00": "0",
      "16:00": "0",
      "17:00": "0",
    },
  },
];

export const DATETIME_AVAILABLE = new Date("2025-01-01T08:00:00.000");
export const DATETIME_NOT_AVAILABLE = new Date("2025-01-01T09:00:00.000");
export const DATETIME_NO_ROOMS = new Date("2025-01-01T10:00:00.000");
