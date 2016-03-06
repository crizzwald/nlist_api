var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 1337, host: 'localhost' });

//dogwater configuration
var dogwaterOptions = {
  connections: {
    postgresDB: {
      adapter: 'postgresAdapter',
      host: 'localhost', // defaults to `localhost` if omitted
      port: 27017, // defaults to 27017 if omitted
      user: 'username_here', // or omit if not relevant
      password: 'password_here', // or omit if not relevant
      database: 'database_name_here' // or omit if not relevant
    }
  },
  adapters:{
     postgresAdapter: 'sails-postgresql'
  },
  models: [require('./models/post'), require('./models/postType')]
};

//configure the server
server.register([{
    register : require('blipp')
  },{
    register: require('dogwater'),
    options: dogwaterOptions
  },{
    register: require('bedwetter'),
    options: {}
  }
], function (err) {
    if (err) { return console.log(err); }
    // register routes
    server.route(require('.routes/post'));
    // start server
    server.start(function () {
        console.log('NList API up and running at:', server.info.uri);
    });
});
