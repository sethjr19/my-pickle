import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const chatroom = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Chat Room: {roomId}</Text>
    {/* Messages would go here */}
  </View>
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
export default chatroom