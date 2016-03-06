var shortid = require('shortid')

module.exports = {
  identity: 'postType',
  connection: 'postgresDB',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function() {
        return shortid.generate();
      }
    },
    title: {
      type: 'string',
      required: true
    }
}
