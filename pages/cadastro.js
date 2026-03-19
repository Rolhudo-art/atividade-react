import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground,
  Alert
} from 'react-native';

export default function Cadastro({navigation}) {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  function Cadastrar(){

    if(nome === "" || email === "" || senha === "" || confirmSenha === ""){
      Alert.alert("ERRO", "Preencha todos os campos!");
    }
    else if(senha !== confirmSenha){
      Alert.alert("ERRO", "As senhas não coincidem!");
    }
    else{
      Alert.alert("Sucesso!", "Conta criada com sucesso!");
      navigation.navigate("Login");
    }

  }

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        
        <Text style={styles.logo}>
          FUT<Text style={styles.span}>API</Text>
        </Text>
        
        <Text style={styles.title}>CRIAR CONTA</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Nome Completo" 
          placeholderTextColor="#888"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput 
          style={styles.input} 
          placeholder="Confirmar Senha" 
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={confirmSenha}
          onChangeText={setConfirmSenha}
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={Cadastrar}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonSecondary} onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.backText}>Já tenho uma conta? Entrar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(10,10,10,0.9)', 
    padding: 30, 
    justifyContent: 'center' 
  },
  logo: { 
    fontSize: 40, 
    fontWeight: '900', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  span: { color: '#e2fd10' },
  title: { 
    color: '#e2fd10', 
    fontSize: 18, 
    fontWeight: '700', 
    marginBottom: 30, 
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  input: { 
    backgroundColor: '#1a1a1a', 
    color: '#fff', 
    padding: 15, 
    borderRadius: 5, 
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333'
  },
  buttonPrimary: { 
    backgroundColor: '#e2fd10', 
    padding: 18, 
    borderRadius: 5, 
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: { 
    color: '#000', 
    fontWeight: '900',
    fontSize: 16
  },
  buttonSecondary: { 
    marginTop: 25, 
    alignItems: 'center' 
  },
  backText: {
    color: '#888',
    fontSize: 14
  }
});