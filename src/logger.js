module.exports = component => {
  return message => {
    console.log(`${new Date()} [${component}] ${message}`)
  }
}

