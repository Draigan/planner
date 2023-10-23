import { createStackNavigator } from "@react-navigation/stack";
import Jackpot from "../screens/Jackpot";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Jackpot" component={Jackpot} />
    </Stack.Navigator>
  );
}
