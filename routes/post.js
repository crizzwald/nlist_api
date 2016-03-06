var bedwetterOptions = {}

module.exports = [{
  // return all post items
  path: '/posts',
  method: 'GET',
  config: {
    handler: {
      bedwetter: bedwetterOptions
    }
  }
}, {
  // return a specific post by id
  path: '/posts/{id}',
  method: 'GET',
  config: {
    handler: {
      bedwetter: bedwetterOptions
    }
  }
}, {
  // create a new post
  path: '/posts',
  method: 'POST',
  config: {
    handler: {
      bedwetter: bedwetterOptions
    }
  }
}, {
  // udpate an existing post by id
  path: '/posts/{id}',
  method: ['PATCH', 'POST'],
  config: {
    handler: {
      bedwetter: bedwetterOptions
    }
  }
}, {
  // remove a post by id
  path: '/posts/{id}',
  method: 'DELETE',
  config: {
    handler: {
      bedwetter: bedwetterOptions
     }
  }
}];
