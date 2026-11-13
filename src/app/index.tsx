import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import MiBoton from "../components,/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.contenedor}>
        <View style={styles.perfil}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={55} color="#FFFFFF" />
          </View>

          <Text style={styles.nombre}>Karen Taliana Lozada Lambraño</Text>

          <Text style={styles.titulacion}>
            Estudiante de Análisis y Desarrollo de Software
          </Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.tituloSeccion}>Sobre mí</Text>

          <Text style={styles.descripcion}>
            Soy aprendiz del SENA en formación en el programa Tecnólogo en
            Análisis y Desarrollo de Software, con formación previa como técnica
            en el mismo campo. Tengo conocimientos básicos en desarrollo web,
            lógica de programación y bases de datos. Me caracterizo por ser
            responsable, organizada y tener buena disposición para aprender.
          </Text>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.tituloSeccion}>Mis habilidades</Text>

          {[
            "HTML y CSS",
            "JavaScript",
            "SQL y bases de datos",
            "Git",
            "Análisis de requerimientos",
            "Diseño de interfaces web",
            "Trabajo en equipo",
          ].map((habilidad, index) => (
            <View key={index} style={styles.habilidad}>
              <Ionicons name="checkmark-circle" size={19} color="#8B5CF6" />
              <Text style={styles.textoHabilidad}>{habilidad}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.tituloSeccion}>Contacto</Text>

          <MiBoton
            texto="Enviar correo"
            mensaje="Puedes consultar mi información de contacto."
            icono="mail-outline"
          />

          <MiBoton
            texto="Llamar"
            mensaje="Información de contacto telefónico."
            icono="call-outline"
          />

          <MiBoton
            texto="Ver proyectos"
            mensaje="Aquí podrás consultar mis proyectos de formación."
            icono="logo-github"
          />
        </View>
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
  perfil: {
    alignItems: "center",
    marginBottom: 25,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#39245F",
    textAlign: "center",
  },
  titulacion: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginTop: 8,
  },
  tarjeta: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#8B5CF6",
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 14,
    color: "#555555",
    lineHeight: 23,
    textAlign: "justify",
  },
  habilidad: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    gap: 9,
  },
  textoHabilidad: {
    fontSize: 14,
    color: "#555555",
  },
});
