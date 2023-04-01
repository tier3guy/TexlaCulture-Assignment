// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { LoginScreen } from "../screens";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
