import { View, StyleSheet, ScrollView } from "react-native";

// Components
import { Text, Header } from "../components";

// Constants
import { COLORS } from "../constants";

const MySpaceScreen = () => {
	return (
		<ScrollView
			style={styles.mySpace}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
		>
			<Header label="My Space" />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mySpace: {
		flex: 1,
		backgroundColor: COLORS.light.background,
	},
});

export default MySpaceScreen;
