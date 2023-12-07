// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//Load 2

// import { Text, SafeAreaView, StyleSheet } from 'react-native';

// // You can import supported modules from npm
// import { Card } from 'react-native-paper';

// // or any files within the Snack
// import AssetExample from './components/AssetExample';

// export default function App() {
//   return (
//       <SafeAreaView style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topleft}>
        <Text > Top left </Text>
      </View>
      <View style={styles.center}>
        <View style={styles.circle}>
          <Text style={styles.text}>Center</Text>
        </View>
      </View>
      <View style={styles.bottumRight}>
        <Text style={{ textAlign: 'right'}} > Bottom Right </Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#CCFFFF',
  },
  text:{
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
  },
  topleft:{
    borderWidth: 2, borderColor: '#000000',
    borderRadius: 10,
    marginTop: 20,
    // marginHorizontal: 20, //top + bottum; Harizontal: left + right
    padding: 10,
    backgroundColor: 'pink',
    color: '#FF3300',
  },
  center:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
    // backgroundColor: '#00FF00',
  },
  circle:{
    // height: 'auto', width: 'auto',
    height: 200, width: 200,
    backgroundColor: 'green',
    marginHorizontal: 50 ,
    borderRadius: 100,
    justifyContent: 'center',

  },
  bottumRight:{
    padding: 10,
    borderWidth: 2, borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'pink',
    color: '#FF3300',
  }
})
