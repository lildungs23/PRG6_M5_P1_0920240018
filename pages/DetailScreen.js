import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function DetailScreen({ route }) {
  const { dataPresensi } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{dataPresensi.course}</Text>
        <View style={styles.row}><Text>Tanggal:</Text><Text style={styles.bold}>{dataPresensi.date}</Text></View>
        <View style={styles.row}><Text>Status:</Text><Text style={[styles.bold, {color: dataPresensi.status === 'Present' ? 'green' : 'red'}]}>{dataPresensi.status}</Text></View>
        <View style={styles.row}><Text>Ruangan:</Text><Text style={styles.bold}>{dataPresensi.room}</Text></View>
        <View style={styles.row}><Text>Dosen:</Text><Text style={styles.bold}>{dataPresensi.lecturer}</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 20 },
  card: { backgroundColor: "white", padding: 20, borderRadius: 10, elevation: 3 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20, borderBottomWidth: 1, paddingBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  bold: { fontWeight: 'bold' }
});