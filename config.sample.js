module.exports = {
  storage: `${require('os').homedir()}/cloud`,
  get cache () { return `${this.storage}/cache.json` },

  plugins: [
    require('cloud-archiver-spotify') 
  ],

  spotify: {
    key: '',
    secret: ''
  }
}

