import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Trips from "../screens/Trips";
import Settings from "../screens/Settings";
import EditProfile from "../screens/EditProfile";
import Payment from "../screens/Payment";
import Language from "../screens/Language";
import CreditCard from "../screens/CreditCard";


const Stack = createNativeStackNavigator();

export default function UserNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Trips" component={Trips} />

            <Stack.Screen
                name="Settings"
                component={Settings}
            />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="CreditCard" component={CreditCard} />
        </Stack.Navigator>
    )
}