import { Ionicons } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  titulo: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
}

export default function TarjetaHobby({ titulo, descripcion, icono }: Props) {
  return (
    <TouchableOpacity
      style={styles.tarjeta}
      onPress={() => Alert.alert(titulo, descripcion)}
    >
      <Ionicons name={icono} size={35} color="#8B5CF6" />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
  },
  descripcion: {
    color: "#666666",
    fontSize: 14,
    textAlign: "center",
    marginTop: 6,
  },
});
