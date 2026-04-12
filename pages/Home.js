import { View,Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
    const renderItem = ({ item }) => (
    <View style={styles.item}>

    <View>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>

    <View style={{flexDirection:'row', alignItems:'center'}}>

    <MaterialIcons
    name={item.status === "Present" ? "check-circle" : "cancel"}
    size={20}
    color={item.status === "Present" ? "green" : "red"}
    style={{marginRight:5}}
    />

    <Text
    style={
    item.status === "Present"
    ? styles.present
    : styles.absent
    }
    >
    {item.status}
    </Text>

    </View>

  </View>
);
const presentCount = history.filter(item => item.status === "Present").length;
const absentCount = history.filter(item => item.status === "Absent").length;

    return (
        <SafeAreaView style={styles.container}>  
                <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Attendance App</Text>


        <View style={styles.card}>
            <View style={styles.icon}>
                    <MaterialIcons name="person" size={40} color="#555" /> 
            </View>

            <View>
            <Text style={styles.name}>Abdul Jabbar Arrahman</Text>
            <Text>NIM: 0920240018</Text>  
            <Text>Class : RPL-2B</Text>
            </View>
        </View>  

        <View style={styles.classCard}>
            <Text style={styles.name}>Today's Class</Text>
            <Text>Mobile Programming</Text>
            <Text>08:00 - 10:00</Text>
            <Text>Lab 3</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>CHECK IN</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.classCard}>
            <Text style={styles.name}>Upcoming Class</Text>
            <Text>Database Systems</Text>
            <Text>10:00 - 12:00</Text>
            <Text>Room 201</Text>
        </View>

        <View style={styles.classCard}>
            <Text style={styles.name}>Attendance Summary</Text>
            <Text>Present : {presentCount}</Text>
            <Text>Absent : {absentCount}</Text>
        </View>

        <Text style={styles.subtitle}>Attendance History</Text>
            <FlatList 
                data={history} 
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
                />  

            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: '#eee',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    classCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        },

    button: {
        marginTop: 10,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white'
    },

    content: {
        padding: 20,
        paddingBottom: 40,
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },

    course: {
        fontSize: 16,
    },

    date: {
        fontSize: 12,
        color: 'gray',
    },

    present: {
        color: 'green',
        fontWeight: 'bold',
    },

    absent: {
        color: 'red',
        fontWeight: 'bold',
    },
});