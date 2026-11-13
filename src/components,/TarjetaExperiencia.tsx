import { StyleSheet, Text, View } from "react-native";

interface Props {
  titulo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
}

export default function TarjetaExperiencia({
  titulo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginVertical: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
  },
  empresa: {
    fontSize: 15,
    color: "#8B5CF6",
    marginTop: 6,
  },
  periodo: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
  },
  descripcion: {
    fontSize: 14,
    color: "#555555",
    marginTop: 10,
    lineHeight: 21,
  },
});
