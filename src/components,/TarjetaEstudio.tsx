import { StyleSheet, Text, View } from "react-native";

interface Props {
  titulo: string;
  institucion: string;
  periodo: string;
  enCurso: boolean;
}

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  enCurso,
}: Props) {
  return (
    <View style={[styles.tarjeta, enCurso && styles.tarjetaEnCurso]}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.institucion}>{institucion}</Text>
      <Text style={styles.periodo}>{periodo}</Text>

      {enCurso && <Text style={styles.etiqueta}>En Curso</Text>}
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
  tarjetaEnCurso: {
    backgroundColor: "#F1EAFE",
    borderWidth: 1,
    borderColor: "#8B5CF6",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
  },
  institucion: {
    fontSize: 15,
    color: "#666666",
    marginTop: 6,
  },
  periodo: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
  },
  etiqueta: {
    color: "#FFFFFF",
    backgroundColor: "#8B5CF6",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
    overflow: "hidden",
  },
});
