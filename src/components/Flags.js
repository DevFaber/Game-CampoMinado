import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Flags(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View
        style={[
          styles.flagMastro,
          props.bigger ? styles.flagMastroBigger : null,
        ]}
      />
      <View
        style={[styles.flagBase1, props.bigger ? styles.flagBase1Bigger : null]}
      />
      <View
        style={[styles.flagBase2, props.bigger ? styles.flagBase2Bigger : null]}
      />
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
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },

  flagMastroBigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagBase1Bigger: {
    height: 4,
    width: 12,
    marginLeft: 12,
    marginTop: 20,
  },
  flagBase2Bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24,
  },
})
