import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaExperiencia from "../components,/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Mi experiencia</Text>

      <TarjetaExperiencia
        titulo="Aprendiz desarrolladora"
        empresa="Proyectos de formación - SENA"
        periodo="2026 - Actualidad"
        descripcion="Desarrollo de páginas web y aplicaciones básicas utilizando HTML, CSS y JavaScript. Participación en actividades de programación, bases de datos y trabajo colaborativo."
      />

      <TarjetaExperiencia
        titulo="Proyectos académicos"
        empresa="Formación SENA"
        periodo="Durante mi formación"
        descripcion="Realización de actividades y proyectos relacionados con el análisis de requerimientos, diseño de interfaces, lógica de programación y desarrollo de software."
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
