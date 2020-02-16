import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Flags from './Flags'

export default function GameHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flags bigger />
        </TouchableOpacity>
        <Text style={styles.flagsRemaining}>{props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 400,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsRemaining: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#FAB418',
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
})
