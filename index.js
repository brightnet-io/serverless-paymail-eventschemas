const ajv = require('ajv')();


module.exports.AddressIssuedEventJsonSchema = ajv.compile(require('./schemas/address-issued-event'));