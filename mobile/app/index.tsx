import { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) router.replace('/home');
      else router.replace('/login');
    };
    checkAuth().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#0b1221'}}>
        <ActivityIndicator color="#22d3ee" />
        <Text style={{color:'white', marginTop:8}}>Loading...</Text>
      </View>
    );
  }
  return null;
}
