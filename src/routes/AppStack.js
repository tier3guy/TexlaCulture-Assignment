// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import {
	HomeScreen,
	MySpaceScreen,
	MyTeamScreen,
	SettingsScreen,
} from "../screens";

// Components
import { TabBar } from "../components";

const Tab = createBottomTabNavigator();

const AppStack = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
			tabBar={(props) => <TabBar {...props} />}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="My Space" component={MySpaceScreen} />
			<Tab.Screen name="My Team" component={MyTeamScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
};

export default AppStack;
