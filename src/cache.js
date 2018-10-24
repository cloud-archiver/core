const fs = require('fs')

module.exports = class Cache {

  constructor ({ config, logger }) {
    this.config = config
    this.logger = logger
    this.cacheFile = 'cache.json'
  }

  init () {
    try {
      this.cache = JSON.parse(fs.readFileSync(this.cacheFile))
    } catch (error) {
      this.logger("Can't read exisiting cache")

      this.cache = {}
    }
  }

  getInstance (namespace) {
    const cache = this.cache
    const save  = this._save.bind(this)
    const getKey = key => [namespace, key].join('.')

    return {
      set: (key, value) => {
        cache[getKey(key)] = value
        save()
      },

      get: key => {
        return cache[getKey(key)]
      }
    }
  }

  _save () {
    return fs.writeFileSync(this.cacheFile, JSON.stringify(this.cache))
  }
}
