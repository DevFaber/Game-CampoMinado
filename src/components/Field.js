import React from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import params from '../params'
import Mines from './Mines'
import Flags from './Flags'

export default function Field(props) {
  const {mined, opened, nearMines, exploded, flagged} = props

  const styleField = [styles.field]

  if (opened) styleField.push(styles.opened)
  if (exploded) styleField.push(styles.exploded)
  if (flagged) styleField.push(styles.flagged)
  if (!opened && !exploded) styleField.push(styles.regular)

  let color = null
  if (nearMines > 0) {
    if (nearMines === 1) color = '#2a28d7'
    if (nearMines === 2) color = '#40ff00'
    if (nearMines > 2 && nearMines < 6) color = '#ff0000'
    if (nearMines >= 6) color = '#e6e600'
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSetFlag}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
        ) : (
          false
        )}
        {mined && opened ? <Mines /> : false}
        {flagged && !opened ? <Flags /> : false}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: '#e6ac00',
    borderColor: '#ff0000',
  },
})
