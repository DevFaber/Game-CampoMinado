import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Flags(props) {
  return (
    <View style={styles.container}>
      <View style={styles.flag} />
      <View style={styles.flagMastro} />
      <View style={styles.flagBase1} />
      <View style={styles.flagBase2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3,
  },

  flagMastro: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flagBase1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  flagBase2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12,
  },
})
