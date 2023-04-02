import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Constants
import { COLORS } from "../constants";

const Button = ({ label, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress ? onPress : () => alert("Clicked")}
		>
			<Text style={styles.label}>{label ? label : "Button"}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLORS.light.blue,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	label: {
		color: COLORS.light.white,
	},
});

export default Button;
