const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const waitForEvent = (element, eventType) => {
  return new Promise((resolve) => {
    element.addEventListener(eventType, function handler(event) {
      element.removeEventListener(eventType, handler)
      resolve(event)
    })
  })
}

export { getRandomInt, waitForEvent }