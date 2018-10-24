const Logger = require('./src/logger.js')
const Cache = require('./src/cache.js')

const config = {}
const logger = new Logger({ config })
const cache = new Cache({ config, logger: logger.getInstance('cache') })

cache.init()

const spotify = cache.getInstance('spotify')

console.log(spotify.get('test'))
spotify.set('test', 'abc')
console.log(spotify.get('test'))

