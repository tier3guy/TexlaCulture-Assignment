import { View, StyleSheet } from "react-native";

// Components
import { Button, Text } from "../components";

// Contexts
import { useAuthentication } from "../contexts/Authentication";

const HomeScreen = () => {
	const { setUser } = useAuthentication();

	return (
		<View style={styles.home}>
			<Text>Home Screen</Text>
			<Button
				label={"Logout"}
				onPress={() => {
					setUser(null);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	home: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default HomeScreen;
