import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings.jsx";
import Money from "../screens/Money.jsx";
import UserDisplay from "../screens/UserDisplay.jsx";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Demarr"
        component={UserDisplay}
        initialParams={{
          userName: "demarr"
        }} />
      <Tab.Screen name="Draigan"
        component={UserDisplay}
        initialParams={{
          userName: "draigan"
        }} />
      <Tab.Screen name="Money" component={Money} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
