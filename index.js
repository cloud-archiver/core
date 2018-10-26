const Logger = require('./src/logger.js')
const Cache = require('./src/cache.js')
const config = require('./config.js')

const logger = new Logger({ config })
const cache = new Cache({ config, logger: logger.getInstance('cache') })

cache.init()

const spotify = cache.getInstance('spotify')

spotify.set('test', 'test')

console.log(config.cache)

