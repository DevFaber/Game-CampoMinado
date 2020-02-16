import React, {Component} from 'react'
import {StyleSheet, View, StatusBar, Text, Alert} from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import GameHeader from './src/components/GameHeader'
import SelectLevel from './src/pages/SelectLevel'
import {
  createMinedBoardGame,
  cloneBoard,
  openField,
  hasExplosion,
  winner,
  exibhMines,
  setFlag,
  markedFlags,
} from './src/components/EngineGame'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoardGame(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showSelectLevel: false,
    }
  }

  openingField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = winner(board)

    if (lost) {
      exibhMines(board)
      Alert.alert('Perdeeeeeuuuu Zé Roelaaaaaaa !!!')
    }

    if (won) {
      Alert.alert('Venceu Potênciaa, parabénsss ;) ')
    }

    this.setState({board, lost, won})
  }

  settingFlagOnField = (row, column) => {
    const board = cloneBoard(this.state.board)
    setFlag(board, row, column)
    const won = winner(board)

    if (won) {
      Alert.alert('Venceu Potênciaa, parabénsss ;) ')
    }

    this.setState({board, won})
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" style={{backgroundColor: '#AAA'}} />
        <View style={styles.container}>
          <SelectLevel
            isVisible={this.state.showSelectLevel}
            onLevelSelected={this.onLevelSelected}
            onCancel={() => this.setState({showSelectLevel: false})}
          />

          <GameHeader
            flagsLeft={this.minesAmount() - markedFlags(this.state.board)}
            onNewGame={() => this.setState(this.createState())}
            onFlagPress={() => this.setState({showSelectLevel: true})}
          />

          <View style={styles.board}>
            <MineField
              board={this.state.board}
              onOpenField={this.openingField}
              onSettingFlag={this.settingFlagOnField}
            />
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
  },

  content: {
    fontSize: 30,
    justifyContent: 'center',
    color: '#FAB418',
    fontWeight: 'bold',
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#FAB418',
    padding: 4,
  },

  inform: {
    fontSize: 15,
    color: '#EEE',
    marginBottom: 5,
  },
})
