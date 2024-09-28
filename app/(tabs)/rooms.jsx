import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const chatRooms = [
    { id: '1', name: 'Basketball - Monday' },
    { id: '2', name: 'Basketball - Wednesday' },
    { id: '3', name: 'Basketball - Friday' },
]

const Rooms = () => {
const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    
      <FlatList
      data={chatRooms}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
          <Pressable style={styles.chatRoom}
          // onPress={() => navigation.navigate('ChatRoom', { roomName: item.name })}
          >
            <Text style={styles.roomName}>{item.name}</Text>
          </Pressable>
      )}>

      </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    chatRoom: {
      padding: 20,
      backgroundColor: '#f0f0f0',
      marginBottom: 10,
      borderRadius: 5,
    },
    roomName: {
      fontSize: 18,
    },
  });

export default Rooms