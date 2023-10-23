import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Main from "./Main";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Main />
        <StatusBar style="auto" />
      </PaperProvider>
    </NavigationContainer>
  );
}
