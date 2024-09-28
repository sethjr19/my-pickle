import { View, Text, StyleSheet, AppState, Alert } from 'react-native'
import React, {useState} from 'react'
import { Button, Input } from '@rneui/themed'
import { supabase } from '../lib/supabase'
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';


AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})
const Signin = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
    
  }
    
  return (
    <View style={styles.container}>
    <View style={[styles.verticallySpaced, styles.mt20]}>
      <Input
        label="Email"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={'none'}
      />
    </View>
    <View style={styles.verticallySpaced}>
      <Input
        label="Password"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
      />
    </View>
    <View style={[styles.verticallySpaced, styles.mt20]}>
      <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
    </View>
    {/* <View style={styles.verticallySpaced}>
      <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
    </View> */}
    <View>
      <Text style={styles.mt20}>Or <Link href={'/register'} style={{fontWeight : 'bold'}}>register</Link> an account</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
    borderRadius: '20%',
  },
  mt20: {
    marginTop: 20,
  },
})

export default Signin