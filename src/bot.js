/**
 * A Bot AI that uses Microsoft Bot FW
 * @see http://docs.botframework.com/builder/node/overview/#navtitle
 */
var restify = require('restify');
var builder = require('botbuilder');
var config = require('./config/bot-connector');

// Create bot
var bot = new builder.BotConnectorBot({
  appId: config.appId, 
  appSecret: config.appSecret 
});

bot.add('/', function (session) {
  session.send('Hello World');
});

var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, '127.0.0.1', function () {
  console.log('Listening to %s', server.url);
});
