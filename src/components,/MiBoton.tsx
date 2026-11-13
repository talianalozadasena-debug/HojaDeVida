import { Ionicons } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

interface MiBotonProps {
  texto: string;
  mensaje: string;
  icono: keyof typeof Ionicons.glyphMap;
}

export default function MiBoton({ texto, mensaje, icono }: MiBotonProps) {
  const mostrarAlerta = () => {
    Alert.alert(texto, mensaje);
  };

  return (
    <TouchableOpacity style={styles.boton} onPress={mostrarAlerta}>
      <Ionicons name={icono} size={20} color="#FFFFFF" />
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#8B5CF6",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 6,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
