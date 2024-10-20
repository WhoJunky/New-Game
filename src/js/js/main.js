import '../css/style.css'
import { darkModeHandle } from './untils'
import { startGame } from './game'

darkModeHandle()

const startGameButton = document.getElementById('startGame')
startGameButton.addEventListener('click', startGame)