import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Draigan from "../screens/Draigan.jsx";
import Demarr from "../screens/Demarr.jsx";
import Settings from "../screens/Settings.jsx";
import Money from "../screens/Money.jsx";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Demarr" component={Demarr} />
      <Tab.Screen name="Draigan" component={Draigan} />
      <Tab.Screen name="Money" component={Money} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
