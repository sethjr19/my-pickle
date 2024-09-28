import { Text, View, StyleSheet, ScrollView, Image} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import Rooms from './rooms'
import SportsCard from "@/components/SportsCard";

const pickle = require('/Users/seth/Desktop/CODE/MOBILE APPS/myPickle/myPickle/assets/images/pickle-logo.png')

const sports = [
  { id: '1', name: 'Basketball', image: require("../../assets/images/basketball.jpg") },
  { id: '2', name: 'Pickleball', image: require("../../assets/images/pickleball.jpg") },
  { id: '3', name: 'Badminton', image: require("../../assets/images/badminton.jpg") },
  // Add more sports here
];

export default function Index() {

  const renderItem = ({ item }: any) => (
    <SportsCard sportName={item.name} imageSource={item.image}/>
  )

  return (
    <SafeAreaView style={styles.container}>
          
          <View style={styles.view}>
              <Image source={pickle}
              style={{ width: 150, height: 150 }}
               />
               <Text style={styles.text}>
                 Join myPickle Today For Free 
               </Text>
              <FlatList 
              data={sports}
              style={styles.flatlist}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              numColumns={2}
              >
            
              </FlatList>
               
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: 'black',
       height:'100%'
     }
     ,
     text: {
      color:'white',
      fontSize:30,
      fontFamily:'Pacifico'
    },
    flatlist: {
      color:'white',
      width:'100%',
    },
    view: {
      fontSize:30,
      alignItems:'center',
      height: '100%'
    },
  });
