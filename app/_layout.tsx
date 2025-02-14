import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeaderButton from "@/components/HeaderButton";

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Book a Room",
            headerRight: () => <HeaderButton />,
            headerTitleStyle: { fontSize: 20 },
          }}
        />
        <Stack.Screen name="webview" />
        <Stack.Screen name="camera" options={{ title: "QrCode Scanner" }} />
      </Stack>
    </QueryClientProvider>
  );
}
