import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components,/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.perfil}>
        <Ionicons name="person-circle" size={100} color="#8B5CF6" />

        <Text style={styles.nombre}>Karen Taliana Lozada</Text>
        <Text style={styles.subtitulo}>
          Aprendiz de Análisis y Desarrollo de Software
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.titulo}>Sobre mí</Text>
        <Text style={styles.descripcion}>
          Soy aprendiz del SENA en el programa Tecnólogo en Análisis y
          Desarrollo de Software. Me interesa aprender sobre programación,
          desarrollo web y nuevas tecnologías. Me considero una persona
          responsable, organizada y con disposición para aprender.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.titulo}>Mis habilidades</Text>
        <Text style={styles.descripcion}>
          • HTML y CSS{"\n"}• JavaScript{"\n"}• Python{"\n"}• SQL y bases de
          datos{"\n"}• Git y GitHub{"\n"}• Trabajo en equipo
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.titulo}>Contacto</Text>

        <MiBoton
          texto="Correo electrónico"
          mensaje="Puedes agregar aquí tu correo de contacto."
          icono="mail-outline"
        />

        <MiBoton
          texto="Llamar"
          mensaje="Puedes agregar aquí tu número de contacto."
          icono="call-outline"
        />

        <MiBoton
          texto="Ver proyectos"
          mensaje="Aquí puedes consultar mis proyectos de formación."
          icono="folder-outline"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F8F6FC",
    padding: 20,
  },
  perfil: {
    alignItems: "center",
    marginTop: 35,
    marginBottom: 25,
  },
  nombre: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
    textAlign: "center",
  },
  subtitulo: {
    color: "#777777",
    textAlign: "center",
    marginTop: 8,
  },
  seccion: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 18,
  },
  titulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#8B5CF6",
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 23,
  },
});
