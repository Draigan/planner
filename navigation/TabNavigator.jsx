import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Draigan from "../screens/Draigan.js";
import Demarr from "../screens/Demarr.js";
import Settings from "../screens/Settings.js";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Demarr" component={Demarr} />
      <Tab.Screen name="Draigan" component={Draigan} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
