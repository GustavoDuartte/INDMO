import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro App!</Text>
      <TextInput style={styles.input} />
      <Button></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5426FF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  input: {
    borderBottomWidth: "1px",
    borderBottomColor: "#333",
    backgroundColor: "#E5E5E5",
    padding: "5px",
  },
});
