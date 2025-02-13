export interface RoomModel {
  name: string;
  capacity: number;
  level: number;
  availability: Record<string, string>;
}
