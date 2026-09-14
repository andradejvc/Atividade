import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.buttonText}>Sair (Login)</Text>
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