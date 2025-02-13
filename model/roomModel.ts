export interface RoomModel {
  name: string;
  capacity: number;
  level: number;
  availability: Record<string, string>;
}

export enum RoomFilters {
  Location = "Location",
  Capacity = "Capacity",
  Availability = "Availability",
  Level = "Level",
}
