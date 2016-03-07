var Joi = require("joi");

module.exports = [{
  // return all post items
  path: '/posts',
  method: 'GET',
  handler: function (request, reply) {
    var Posts = request.collections.posts;

    // Reply with promise
    reply(Posts.find({}));
  }
},
{
  // return a specific post by id
  path: '/posts/{id}',
  method: 'GET',
  handler: function (request, reply) {
    reply({message:"we good"});
  }
},
{
  // create a new post
  path: '/posts',
  method: 'POST',
  config: {
    handler: function (request, reply) {
      /*
      title - required
      price - required
      description - required
      trade_description - only required if type is FSFT
      email - required
      willingToShip - defaults to false
      shippingPrice - if willing is true, this is required

      User.create({
        name: 'Walter Jr'
      })
      .exec(function(err, user) {});
       */
      var Post = request.collections.posts;
      Post.create(request.payload)
      .exec(function(error, post){
        if(error){
          reply(error);
        }
        reply({message: "Post Created"});
      });
    },
    validate: {
      payload: {
        title: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        description: Joi.string().required(),
        trade_description: Joi.string().optional(),
        email: Joi.string().required(),
        willingToShip: Joi.boolean().optional(),
        shippingPrice: Joi.number().precision(2).when('willingToShip', {is: true, then: Joi.required() })
      }
    }
  }
},
{
  // udpate an existing post by id
  path: '/posts/{id}',
  method: ['PATCH', 'POST'],
  handler: function (request, reply) {

  }
},
{
  // remove a post by id
  path: '/posts/{id}',
  method: 'DELETE',
  handler: function (request, reply) {

  }
}];
