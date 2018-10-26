module.exports = {
  storage: `${require('os').homedir()}/Dokumente/cloud`,
  get cache () { return `${this.storage}/cache.json` },

  plugins: [],

  spotify: {
    key: '',
    secret: ''
  }
}

