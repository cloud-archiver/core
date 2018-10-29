module.exports = {
  storage: `${require('os').homedir()}/cloud`,
  get cache () { return `${this.storage}/cache.json` },

  plugins: [
    require('@cloud-archiver/spotify') ,
    require('@cloud-archiver/tasks')
  ],

  tasks: {
    daily: [] 
  },

  spotify: {
    key: '',
    secret: ''
  }
}

