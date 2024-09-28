import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
interface SportsCardProps {
  sportName: string;
  imageSource: any; // Change 'any' to the correct type if you are using specific image imports
//   onPress: () => void;
}

const SportsCard: React.FC<SportsCardProps> = ({ sportName, imageSource }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={imageSource} style={styles.cardImage} />
      
      <Text style={styles.cardText}>{sportName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '45%',  // Adjust as necessary
    margin: 10,
    backgroundColor: '#fff',
    elevation: 3,  // For shadow in Android
    // shadowColor: '#000',  // For shadow in iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardText: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SportsCard;