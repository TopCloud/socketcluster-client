const AGClientSocket = require('./lib/clientsocket');
const factory = require('./lib/factory');
const version = '5.4.0';

module.exports.factory = factory;
module.exports.AGClientSocket = AGClientSocket;

module.exports.create = function (options) {
  return factory.create({...options, version});
};

module.exports.version = version;
