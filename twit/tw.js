var Twit = require('twit')

var T = new Twit({
    consumer_key:         process.env.TWIT_CONSUMER_KEY
  , consumer_secret:      process.env.TWIT_CONSUMER_SECRET
  , access_token:         process.env.TWIT_ACCESS_TOKEN
  , access_token_secret:  process.env.TWIT_ACCESS_TOKEN_SECRET
})

//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: '👍  #emoji #unicode #nodejs #twit' }, function(err, data, response) {
  console.log(data);
  console.log(err);
})

