import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaEstudio from "../components,/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Mi formación académica</Text>

        <Text style={styles.subtitulo}>
          Mi recorrido educativo y profesional
        </Text>

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA - Servicio Nacional de Aprendizaje"
          periodo="2025 - Actualidad"
          enCurso={true}
        />

        <TarjetaEstudio
          titulo="Técnico en Análisis y Desarrollo de Software"
          institucion="SENA - Servicio Nacional de Aprendizaje"
          periodo="2023 - 2024"
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="Colegio Arborizadora Baja"
          periodo="Finalizado"
          enCurso={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#F5F0FF",
  },
  contenedor: {
    padding: 20,
    paddingTop: 35,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#39245F",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 22,
  },
});
