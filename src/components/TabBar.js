import { View, Pressable, Dimensions, StyleSheet } from "react-native";

// Constants
import { COLORS } from "../constants";

// Components
import Text from "./Text";
import Icons from "./Icons";

const TabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.tabBar}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<View key={index} style={[styles.tabs]}>
						<Pressable
							onPress={onPress}
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Icons
								name={label}
								size={24}
								style={{
									color: isFocused
										? COLORS.light.primary
										: COLORS.light.darkGray,
									marginBottom: 5,
								}}
							/>
							<Text
								style={{
									color: isFocused
										? COLORS.light.primary
										: COLORS.light.darkGray,
								}}
							>
								{label}
							</Text>
						</Pressable>
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		position: "absolute",
		bottom: 2,
		backgroundColor: COLORS.light.background,
	},
	tabs: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 10,
		borderRadius: 1,
		borderColor: "red",
	},
});

export default TabBar;
