import { StyleSheet, Text, View } from "react-native";

interface TarjetaEstudioProps {
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
}: TarjetaEstudioProps) {
  return (
    <View style={[styles.tarjeta, enCurso && styles.tarjetaActiva]}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.institucion}>{institucion}</Text>

      <Text style={styles.periodo}>{periodo}</Text>

      {enCurso && (
        <View style={styles.etiqueta}>
          <Text style={styles.textoEtiqueta}>En Curso</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  tarjetaActiva: {
    backgroundColor: "#F1EAFE",
    borderColor: "#8B5CF6",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333333",
  },
  institucion: {
    fontSize: 14,
    color: "#666666",
    marginTop: 6,
  },
  periodo: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
  },
  etiqueta: {
    backgroundColor: "#8B5CF6",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  textoEtiqueta: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
