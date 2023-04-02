// Path: src\assets\icons.js

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const icons = {
	Home: {
		name: "home-variant",
		component: MaterialCommunityIcons,
	},
	MySpace: {
		name: "face-man-shimmer",
		component: MaterialCommunityIcons,
	},
	MyTeam: {
		name: "people-alt",
		component: MaterialIcons,
	},
	Settings: {
		name: "settings-sharp",
		component: Ionicons,
	},
	ArrowLeft: {
		name: "arrowleft",
		component: AntDesign,
	},
	Search: {
		name: "search",
		component: FontAwesome,
	},
	Bell: {
		name: "bell",
		component: FontAwesome5,
	},
};

const Icon = ({ name, size, color, style, onPress }) => {
	const removeSpaces = (str) => {
		return str.replace(/\s/g, "");
	};

	name = removeSpaces(name);
	const Icon = icons[name].component;
	const SIZE = size || 24;
	const COLOR = color || "black";

	return (
		<Icon
			name={icons[name].name}
			size={SIZE}
			color={COLOR}
			style={style}
			onPress={onPress ? onPress : () => {}}
		/>
	);
};

export default Icon;
