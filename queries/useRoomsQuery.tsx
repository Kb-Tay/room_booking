import React from "react";
import { useQuery } from "@tanstack/react-query";
import { RoomModel } from "@/model/roomModel";

const useRoomsQuery = () => {
  return useQuery<RoomModel[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/yuhong90/7ff8d4ebad6f759fcc10cc6abdda85cf/raw/463627e7d2c7ac31070ef409d29ed3439f7406f6/room-availability.json"
      );
      return response.json();
    },
  });
};

export default useRoomsQuery;
