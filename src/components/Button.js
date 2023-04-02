import { TouchableOpacity, Text, StyleSheet } from "react-native";

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
  button: {},
  label: {},
});

export default Button;
