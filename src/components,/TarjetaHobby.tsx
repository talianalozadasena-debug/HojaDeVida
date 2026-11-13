import { Ionicons } from "@expo/vector-icons";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TarjetaHobbyProps {
  titulo: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
}

export default function TarjetaHobby({
  titulo,
  descripcion,
  icono,
}: TarjetaHobbyProps) {
  return (
    <TouchableOpacity
      style={styles.tarjeta}
      onPress={() => Alert.alert(titulo, descripcion)}
    >
      <View style={styles.contenido}>
        <Ionicons name={icono} size={32} color="#8B5CF6" />
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  contenido: {
    alignItems: "center",
    gap: 10,
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
  },
  descripcion: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
});
