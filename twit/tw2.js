var Twitter = require('node-twitter');

var twitterRestClient = new Twitter.RestClient(
    process.env.TWIT_CONSUMER_KEY,
    process.env.TWIT_CONSUMER_SECRET,
    process.env.TWIT_ACCESS_TOKEN,
    process.env.TWIT_ACCESS_TOKEN_SECRET
);

twitterRestClient.statusesUpdateWithMedia(
    {
        'status': 'Test posting a tweet with an attached image from #nodejs with #node-twitter.',
        'media[]': __dirname + '/bar.png'
    },
    function(error, result) {
        if (error)
        {
            console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
        }

        if (result)
        {
            console.log(result);
        }
    }
);
