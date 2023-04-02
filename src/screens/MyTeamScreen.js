import { View, StyleSheet } from "react-native";

// Components
import { Text } from "../components";

// Constants
import { COLORS } from "../constants";

const MyTeamScreen = () => {
	return (
		<View style={styles.myTeam}>
			<Text>My Team</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	myTeam: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.light.background,
	},
});

export default MyTeamScreen;
