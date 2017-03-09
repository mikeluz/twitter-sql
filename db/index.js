var pg = require('pg');
var postgresUrl = 'postgres://localhost/mikeluz';
var client = new pg.Client(postgresUrl);

client.connect();

module.exports = client;