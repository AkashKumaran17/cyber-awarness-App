import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const router = useRouter();
  const signOut = async () => {
    await AsyncStorage.removeItem('authToken');
    router.replace('/login');
  };
  return (
    <View style={{flex:1, backgroundColor:'#0b1221', padding:24, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'white', fontSize:22, fontWeight:'bold', marginBottom:16}}>Cyber Awareness</Text>
      <Text style={{color:'#94a3b8', marginBottom:24}}>Welcome to the world of security</Text>
      <TouchableOpacity onPress={signOut} style={{backgroundColor:'#ef4444', padding:12, borderRadius:10}}>
        <Text style={{color:'white'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
