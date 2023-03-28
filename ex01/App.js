import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { useState } from "react";

export default function app() {
  const [valL, setValL] = new useState(0);
  const [vali, setVali] = new useState(0);
  const [resultado220, setResultado220] = new useState(0);
  const [resultado127, setResultado127] = new useState(0);

  const conta220 = () => {
    setResultado220((1.73 * valL * vali) / 510.4);
  };
  const conta127 = () => {
    setResultado127((2 * valL * vali) / 294.64);
  };

  return (
    <View style={styles.container}>
      <Text>Comprimento</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setValL(Number(val))}
      />
      <Text>Corrente do equipamento</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setVali(Number(val))}
      />
      <Button
        title="Gerar Resultado"
        onPress={() => {
          conta220();
          conta127();
        }}
      />
      <Text style={styles.title}>220V: {resultado220}</Text>
      <Text style={styles.title}>127V: {resultado127}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5426FF",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
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
  button: {
    padding: "12px",
    backgroundColor: "#DF5800",
    borderRadius: "7px",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.25rem",
  },
});
