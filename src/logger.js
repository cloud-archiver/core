module.exports = class Logger {
  constructor ({ config }) {
    this.config = config
  }

  getInstance (namespace) {
    return (...messages) => {
      console.log(`${new Date()} [${namespace}] ${messages.join(' ')}`)
    }
  }
}

