import { View, StyleSheet } from "react-native";

// Components
import Text from "./Text";
import Icons from "./Icons";

// Constants
import { COLORS } from "../constants";

const Header = ({ label }) => {
	return (
		<View style={styles.header}>
			<View
				style={{
					flexDirection: "row",
				}}
			>
				<Icons
					name="ArrowLeft"
					size={24}
					style={{ color: COLORS.light.primary, marginRight: 10 }}
				/>
				<Text
					style={{
						color: COLORS.light.primary,
						fontSize: 20,
					}}
				>
					{label}
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
				}}
			>
				<Icons
					name="Search"
					size={20}
					style={{ color: COLORS.light.darkGray, marginRight: 20 }}
				/>
				<Icons name="Bell" size={20} style={{ color: COLORS.light.darkGray }} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: COLORS.light.background,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default Header;
