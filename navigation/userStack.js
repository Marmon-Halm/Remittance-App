import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Trips from "../screens/Trips";
import Settings from "../screens/Settings";
import EditProfile from "../screens/EditProfile";


const Stack = createNativeStackNavigator();

export default function UserNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Settings" >
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Trips" component={Trips} />

            <Stack.Screen
                name="Settings"
                component={Settings}
            />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    )
}