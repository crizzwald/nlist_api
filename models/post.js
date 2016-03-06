var shortid = require('shortid')

module.exports = {
  identity: 'post',
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
    },
    location: {
      model: 'location'
      required: true
    },
    price: {
      type: 'float',
      required: true
    }
    description: {
      type: 'text',
      required: true
    },
    //this is used when FSFT is the postType
    trade_description: {
      type: 'text'
    },
    email: {
      type: 'email',
      required: true
    },
    willingToShip: {
      type: 'boolean',
      defaultsTo: false
    },
    shippingPrice: {
      type: float
    }
    postType: {
      model: 'postType'
    }
  }
}
