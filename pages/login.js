import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground 
} from 'react-native';

export default function Login() {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.logo}>FUT<Text style={styles.span}>API</Text></Text>
          
          <Text style={styles.title}>LOGIN</Text>

          <TextInput 
            style={styles.input} 
            placeholder="E-mail" 
            placeholderTextColor="#888" 
          />
          
          <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            placeholderTextColor="#888" 
            secureTextEntry={true} 
          />

          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.link}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(10,10,10,0.85)', justifyContent: 'center', padding: 20 },
  container: { alignItems: 'center' },
  logo: { fontSize: 40, fontWeight: '900', color: '#fff', marginBottom: 40 },
  span: { color: '#e2fd10' },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { 
    width: '100%', 
    height: 50, 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    borderRadius: 5, 
    color: '#fff', 
    paddingHorizontal: 15, 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333'
  },
  buttonPrimary: { 
    backgroundColor: '#e2fd10', 
    width: '100%', 
    height: 50, 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { color: '#0a0a0a', fontWeight: 'bold', fontSize: 16 },
  link: { color: '#888', marginTop: 20 }
});