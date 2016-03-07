var shortid = require('shortid')

module.exports = {
  identity: 'posts',
  connection: 'postgresDB',
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    // location: {
    //   model: 'location',
    //   required: true
    // },
    price: {
      type: 'float',
      required: true
    },
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
      type: 'float'
    }//,
    //postType: {
      //model: 'postType'
    //}
  }
};
