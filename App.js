import { StyleSheet, View, StatusBar } from "react-native";

// Styles
import { useFonts } from "expo-font";

// Contexts
import AuthenticationContextProvider from "./src/contexts/Authentication";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Routes
import Routes from "./src/routes";

// Contants
import { COLORS } from "./src/constants";

const App = () => {
	const [fontsLoaded] = useFonts({
		"Poppins-300": require("./src/assets/fonts/Poppins/Poppins-Medium.ttf"),
		"Poppins-400": require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
		"Montserrat-400": require("./src/assets/fonts/Montserrat/Montserrat.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<AuthenticationContextProvider>
				<View style={styles.app}>
					<StatusBar
						barStyle={"dark-content"}
						backgroundColor={COLORS.light.background}
					/>
					<Routes />
				</View>
			</AuthenticationContextProvider>
		</NavigationContainer>
	);
};

export default App;

const styles = StyleSheet.create({
	app: {
		flex: 1,
	},
});
