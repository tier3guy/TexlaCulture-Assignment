// Path: src\assets\icons.js

// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const icons = {
  Home: {
    name: "home-variant",
    component: MaterialCommunityIcons,
  },
  MySpace: {
    name: "people-alt",
    component: MaterialCommunityIcons,
  },
  MyTeam: {
    name: "people-alt",
    component: MaterialCommunityIcons,
  },
  Settings: {
    name: "settings",
    component: MaterialCommunityIcons,
  },
};

const Icon = ({ name, size, color }) => {
  const Icon = icons[name].component;
  const SIZE = size || 24;
  const COLOR = color || "black";
  return <Icon name={icons[name].name} size={SIZE} color={COLOR} />;
};

export default Icon;
