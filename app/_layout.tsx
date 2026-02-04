import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{tite: "Shopping List"}} />
            <Stack.Screen name="counter" options={{tite: "Counter Screen", presentation: "modal", animation: "fade_from_bottom"}} />
            <Stack.Screen name="idea" options={{title: "My idea", presentation: "modal", animation: "fade_from_bottom"}} />
        </Stack>
    );
}