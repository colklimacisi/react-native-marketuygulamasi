import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import {schedulePushNotification} from './PushNotification' 
const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  function onPress  ()  {schedulePushNotification.call()};

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>satin al</Text>
        </View>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
     alignItems: 'stretch',
   flexDirection: 'column',
    flexWrap: 'nowrap',
    
  },
  button: {
    
    backgroundColor: "#DDDDDD",
    
  },
  countContainer: {
    alignItems: "center",
    
  },
  countText: {
    color: "#FFFFFF"
  }
});

export default TouchableHighlightExample;