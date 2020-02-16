import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native'

export default function SelectLevel(props) {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>

          <TouchableOpacity
            style={(styles.button, styles.backgEasy)}
            onPress={() => props.onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={(styles.button, styles.backgIntermed)}
            onPress={() => props.onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Intermadiário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={(styles.button, styles.backgHard)}
            onPress={() => props.onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: 350,
    height: 280,
    borderRadius: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 5,
  },
  backgEasy: {
    backgroundColor: '#49b65d',
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  backgIntermed: {
    backgroundColor: '#2765f7',
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  backgHard: {
    backgroundColor: '#f26337',
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  buttonLabel: {
    fontSize: 25,
    color: '#EEE',
    fontWeight: 'bold',
  },
})
