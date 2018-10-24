const fs = require('fs')

module.exports = ({ config, logger }) => {
  let cache

  try {
    cache = JSON.parse(fs.readFileSync(cacheFile))
  } catch (error) {
    logger("Can't read exisiting cache") 

    cache = {}
  }

  return namespace => {
    return {
      set: (key, value) => {
        cache[this._key(key)] => value
        this._save()
      },

      get: key => {
        return cache[this._key(key)]
      },

      _key: key => {
        return [namespace, key].join('.')
      },

      _save: () => {
        return fs.writeFileSync(cacheFile, JSON.stringify(cache))
      }
    }
  }
}
