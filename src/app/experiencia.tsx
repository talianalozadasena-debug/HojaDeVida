import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaExperiencia from "../components,/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Mi experiencia</Text>

        <Text style={styles.subtitulo}>
          Proyectos y actividades de formación
        </Text>

        <TarjetaExperiencia
          titulo="Proyectos de formación"
          empresa="SENA - Servicio Nacional de Aprendizaje"
          periodo="2026 - Actualidad"
          descripcion="Participación en proyectos académicos orientados al desarrollo de soluciones tecnológicas. Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y bases de datos. Trabajo colaborativo en equipos de desarrollo."
        />

        <TarjetaExperiencia
          titulo="Desarrollo de aplicaciones web"
          empresa="Proyectos académicos"
          periodo="Durante mi formación"
          descripcion="Práctica de conocimientos en programación, creación de interfaces web, manejo de bases de datos y desarrollo de soluciones mediante herramientas tecnológicas."
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
