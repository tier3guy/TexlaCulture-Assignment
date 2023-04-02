import { View, StyleSheet } from "react-native";

// Components
import { Text } from "../components";

// Constants
import { COLORS } from "../constants";

const SettingsScreen = () => {
	return (
		<View style={styles.settings}>
			<Text>Settings</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	settings: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.light.background,
	},
});

export default SettingsScreen;
