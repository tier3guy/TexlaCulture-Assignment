import { StyleSheet, View, StatusBar } from "react-native";

// Styles
import { useFonts } from "expo-font";

// Contexts
import AuthenticationContextProvider from "./src/contexts/Authentication";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Routes
import { AppStack, AuthStack } from "./src/routes";

const App = () => {
  const { user } = useAuthenticationContext();

  const [fontsLoaded] = useFonts({
    "Poppins-300": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-400": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Montserrat-400": require("./assets/fonts/Montserrat/Montserrat.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthenticationContextProvider>
        <View style={styles.app}>
          <StatusBar style="auto" />
          {user ? <AppStack /> : <AuthStack />}
        </View>
      </AuthenticationContextProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {},
});
