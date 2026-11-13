import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components,/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>
      <Text style={styles.titulo}>Mis hobbies</Text>

      <TarjetaHobby
        titulo="Bailar"
        descripcion="Me gusta bailar porque es una forma de divertirme y expresar mi energía."
        icono="musical-notes-outline"
      />

      <TarjetaHobby
        titulo="Ver películas"
        descripcion="Disfruto ver películas en mi tiempo libre y conocer diferentes historias."
        icono="film-outline"
      />

      <TarjetaHobby
        titulo="Escuchar música"
        descripcion="Me gusta escuchar música porque me ayuda a relajarme y disfrutar mis momentos libres."
        icono="headset-outline"
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
