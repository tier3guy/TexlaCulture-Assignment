import { Text } from "react-native";

const RNText = ({ children, label, monts, light, props }) => {
  return (
    <Text
      style={{
        fontFamily: light
          ? monts
            ? "Montserrat-400"
            : "Poppins-300"
          : "Poppins-400",
      }}
      {...props}
    >
      {children ? children : label}
    </Text>
  );
};

export default RNText;
