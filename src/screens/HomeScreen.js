import { View, StyleSheet } from "react-native";

// Components
import { Button, Text } from "../components";

// Contexts
import { useAuthentication } from "../contexts/Authentication";

// Constants
import { COLORS } from "../constants";

const HomeScreen = () => {
	const { setUser } = useAuthentication();

	return (
		<View style={styles.home}>
			<Text>Home Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.light.background,
	},
});

export default HomeScreen;
