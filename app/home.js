import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/profile')}
      >
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  button: { borderWidth: 1, borderColor: '#000', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 40, marginTop: 10 },
  buttonText: { fontSize: 16 }
});