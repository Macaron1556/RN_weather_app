import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


export default function App() {
    const [number, setNumber] = useState(0);
    
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color: "blue"}}>리액트 네이티브</Text>
      <Text style={{fontSize: 100}}>결과 : {number}</Text>
      <View style={styles.btnGroup}>
        <Button style = {styles.btn} title="증가" onPress={() => setNumber(number + 1)}/>
        <Button style = {styles.btn} title="감소" onPress={() => setNumber(number - 1)}/>
      </View>
      <StatusBar backgroundColor="red" barStyle="light-content" hidden={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize : 50,
    color : "red",
    fontWeight : "bold",
  },
  btnGroup: {
    flexDirection: "row",
    gap : 10,
  },
  btn: {
    width: 100,
  },
});
