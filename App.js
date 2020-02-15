import React from 'react'
import {StyleSheet, View, StatusBar, Text} from 'react-native'
import params from './src/params'
import Field from './src/components/Field'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.content}>APP CAMPO MINADO</Text>
        <Text style={styles.inform}>
          Tamanho da Grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  content: {
    fontSize: 40,
  },

  inform: {
    fontSize: 20,
  },
})
