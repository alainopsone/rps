import { getRandomInt } from './utils'

export default class PlayGame {
  #choices = ['rock', 'paper', 'scissors']
  #humanScore = 0
  #computerScore = 0
  #selectors = new Map ([
    ['result', '[data-result]'],
    ['humanScore', '[data-human-score]'],
    ['computerScore', '[data-computer-score]'],
    ['humanSelection', '[data-human-selection]'],
  ])

  constructor() {
    this.#humanChoice()
  }

  #getComputerChoice() {
    return this.#choices[getRandomInt(this.#choices.length)]
  }

  static useless() {
    console.log('static from PlayGame class')
  }

  #humanChoice() {
    const humanChoices = document.querySelectorAll(this.#selectors.get('humanSelection'))

    humanChoices.forEach((choice) => {
      choice.addEventListener('click', () => {
        try {
          const humanSelection = choice.dataset.humanSelection
          const computerSelection = this.#getComputerChoice()

          console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`)

          this.#playRound(humanSelection, computerSelection)
        } catch (error) {
          console.warn(error)
        }
      })
    })
  }

  #playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      document.querySelector(this.#selectors.get('result')).textContent = "It's a tie!"
      return
    }

    if (
      (humanSelection === 'rock' && computerSelection === 'scissors') ||
      (humanSelection === 'scissors' && computerSelection === 'paper') ||
      (humanSelection === 'paper' && computerSelection === 'rock')
    ) {
      document.querySelector(this.#selectors.get('humanScore')).textContent = ++this.#humanScore
      document.querySelector(this.#selectors.get('result')).textContent = 'You win!'
    } else {
      document.querySelector(this.#selectors.get('computerScore')).textContent = ++this.#computerScore
      document.querySelector(this.#selectors.get('result')).textContent = 'Computer wins!'
    }
  }
}
