const program = require('commander')


program
  .option('-c, --config [config]', 'Config file to use', 'config.js')
  .parse(process.argv)

const config = require(`./${program.config}`)
const Logger = require('./src/logger.js')
const Cache = require('./src/cache.js')

const logger = new Logger({ config })
const cache = new Cache({ config, logger: logger.getInstance('cache') })

const Spotify = require('./local/spotify')
const spotify = new Spotify({ config, logger, cache, program })

// parse again with all plugins loaded
// they won't show up in --help but can be started
program.parse(process.argv)

