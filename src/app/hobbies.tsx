import { ScrollView, StyleSheet, Text, View } from "react-native";

import TarjetaHobby from "../components,/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Mis pasatiempos</Text>

        <Text style={styles.subtitulo}>
          Actividades que disfruto en mi tiempo libre
        </Text>

        <TarjetaHobby
          titulo="Bailar"
          descripcion="Me gusta bailar porque es una actividad que disfruto y me permite expresarme y divertirme."
          icono="musical-notes-outline"
        />

        <TarjetaHobby
          titulo="Ver películas"
          descripcion="Disfruto ver películas en mi tiempo libre, conocer diferentes historias y entretenerme."
          icono="film-outline"
        />

        <TarjetaHobby
          titulo="Escuchar música"
          descripcion="Me gusta escuchar música porque me ayuda a relajarme y disfrutar diferentes ritmos."
          icono="headset-outline"
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
