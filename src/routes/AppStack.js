// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { HomeScreen } from "../screens";

const Tab = createBottomTabNavigator();

const AppStack = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
		</Tab.Navigator>
	);
};

export default AppStack;
