
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
