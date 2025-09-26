import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn, signUp } from '../../src/api/auth';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setError('');
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const signInRes = await signIn(email, password);
      if (signInRes?.error) {
        // Try auto register
        const signUpRes = await signUp(email, password, confirmPassword);
        if (signUpRes?.error) throw new Error(signUpRes.error);
        await AsyncStorage.setItem('authToken', signUpRes.data.token);
      } else {
        await AsyncStorage.setItem('authToken', signInRes.data.token);
      }
      router.replace('/home');
    } catch (e: any) {
      setError(e.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex:1, backgroundColor:'#0b1221', padding:24, justifyContent:'center'}}>
      <Text style={{color:'white', fontSize:24, fontWeight:'bold', marginBottom:16}}>Secure Access</Text>
      {!!error && <Text style={{color:'#fca5a5', marginBottom:8}}>{error}</Text>}
      <TextInput placeholder="Email" placeholderTextColor="#94a3b8" keyboardType="email-address" autoCapitalize="none"
                 value={email} onChangeText={setEmail} style={{color:'white', borderColor:'#334155', borderWidth:1, borderRadius:8, padding:12, marginBottom:12}} />
      <TextInput placeholder="Password" placeholderTextColor="#94a3b8" secureTextEntry value={password} onChangeText={setPassword}
                 style={{color:'white', borderColor:'#334155', borderWidth:1, borderRadius:8, padding:12, marginBottom:12}} />
      <TextInput placeholder="Confirm Password" placeholderTextColor="#94a3b8" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}
                 style={{color:'white', borderColor:'#334155', borderWidth:1, borderRadius:8, padding:12, marginBottom:16}} />

      <TouchableOpacity onPress={handleSubmit} style={{backgroundColor:'#06b6d4', padding:14, borderRadius:10, alignItems:'center'}} disabled={loading}>
        {loading ? (
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <ActivityIndicator color="white" />
            <Text style={{color:'white', marginLeft:8}}>WELCOME TO THE WORLD OF SECURITY</Text>
          </View>
        ) : (
          <Text style={{color:'white', fontWeight:'bold'}}>SECURE ACCESS</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
