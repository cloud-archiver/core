module.exports = class Logger {
  constructor ({ config }) {
    this.config = config
  }

  getInstance (namespace) {
    return message => {
      console.log(`${new Date()} [${namespace}] ${message}`)
    }
  }
}

