// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import {
  HomeScreen,
  SettingsScreen,
  MySpaceScreen,
  MyTeamScreen,
} from "../screens";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Space" component={MySpaceScreen} />
        <Tab.Screen name="My Team" component={MyTeamScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </Stack.Navigator>
  );
};

export default AppStack;
