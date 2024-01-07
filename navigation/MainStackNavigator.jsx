import { createStackNavigator } from "@react-navigation/stack";
import Jackpot from "../screens/Jackpot";
import TabNavigator from "./TabNavigator";
import PrintJSON from "../screens/PrintJSON";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Jackpot" component={Jackpot} />
      <Stack.Screen name="PrintJSON" component={PrintJSON} />
    </Stack.Navigator>
  );
}
