var api_key = 'key-XXXXXXXXXXXXXXXXXXXXXXX';
var domain = 'mydomain.mailgun.org';
var Mailgun = require('mailgun-js');

var mailgun = new Mailgun({
    apiKey: api_key,
    domain: domain
});


exports.send = function(req, res) {
    var data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'sumit@rangle.io',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function(error, body) {
        console.log(body);
    });

    return res.json(data);
};
