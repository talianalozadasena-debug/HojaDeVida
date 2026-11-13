import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaEstudio from "../components,/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Mi formación académica</Text>

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="SENA"
        periodo="2026 - Actualidad"
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Técnico en Análisis y Desarrollo de Software"
        institucion="SENA"
        periodo="2025 - 2026"
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Arborizadora Baja"
        periodo="Finalizado"
        enCurso={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F8F6FC",
    padding: 20,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#8B5CF6",
    marginTop: 35,
    marginBottom: 20,
  },
});
