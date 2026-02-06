import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Shopping List",
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="shopping" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="counter" options={{
                title: "Counter",
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="counter" size={size} color={color} />
                )
            }} />

            <Tabs.Screen name="idea" options={{
                title: "Idea",
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="lightbulb" size={size} color={color} />
                )
            }} />
        </Tabs>
    );
}