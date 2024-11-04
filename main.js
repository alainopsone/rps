class PlayGame {
  constructor() {
    this.choices = ['rock', 'paper', 'scissors']
    this.humanScore = 0
    this.computerScore = 0
    this.setupEventListeners()

    this.selectors = {
      result: '[data-result]',
      humanScore: '[data-human-score]',
      computerScore: '[data-computer-score]'
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  getComputerChoice() {
    return this.choices[this.getRandomInt(this.choices.length)]
  }

  setupEventListeners() {
    const humanChoices = document.querySelectorAll('[data-human-selection]')

    humanChoices.forEach(choice => {
      choice.addEventListener('click', () => {
        const humanSelection = choice.dataset.humanSelection
        const computerSelection = this.getComputerChoice()

        console.log(`Human: ${humanSelection}, Computer: ${computerSelection}`)

        this.playRound(humanSelection, computerSelection)
      })
    })
  }

  playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      document.querySelector(this.selectors.result).textContent = "It's a tie!"
      return
    }

    if (
      (humanSelection === 'rock' && computerSelection === 'scissors') ||
      (humanSelection === 'scissors' && computerSelection === 'paper') ||
      (humanSelection === 'paper' && computerSelection === 'rock')
    ) {
      document.querySelector(this.selectors.humanScore).textContent = ++this.humanScore
      document.querySelector(this.selectors.result).textContent = 'You win!'
    } else {
      document.querySelector(this.selectors.computerScore).textContent = ++this.computerScore
      document.querySelector(this.selectors.result).textContent = 'Computer wins!'
    }
  }
}

new PlayGame()
