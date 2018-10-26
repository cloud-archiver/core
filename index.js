const program = require('commander')

program
  .option('-c, --config [config]', 'Config file to use', 'config.js')
  .parse(process.argv)

const config = require(`./${program.config}`)
const Logger = require('./src/logger.js')
const Cache = require('./src/cache.js')

const loggerFactory = new Logger({ config })
const logger = loggerFactory.getInstance('system')
const cache = new Cache({ config, logger: loggerFactory.getInstance('cache') })


config.plugins.forEach(Plugin => {
  logger('Loading', Plugin.name())

  new Plugin({ 
    config,
    program,
    cache: cache.getInstance(Plugin.name()),
    logger: loggerFactory.getInstance(Plugin.name())
  })
})

// parse again with all plugins loaded
// they won't show up in --help but can be started
program.parse(process.argv)

