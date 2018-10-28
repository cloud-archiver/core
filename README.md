# cloud archiver

Cloud archiver helps you to backup data from cloud services like spotify and twitter. It is written in node.js and based on an easy to extend plugin system.

## setup

Create a new directory for your cloud archiver config and npm config. The later is needed so you can easily install new plugins.

```shell
$ echo "{}" > package.json
$ npm install --save @cloud-archiver/core
$ curl https://raw.githubusercontent.com/cloud-archiver/core/master/config.sample.js > config.js
```

Now edit `config.js` and update your storage path. It is recommended to store the actuall date outside of your config directory so you can easily save all your configurations in something like git.

## plugins

Without plugins the system is quiet useless. To backup a service install the required plugin using npm, add it to your `config.js` and follow the plugin readme.

## license

MIT

