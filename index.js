var Botkit = require('botkit')
var BeepBoop = require('beepboop-botkit')

var controller = Botkit.slackbot()
var beepboop = BeepBoop.start(controller)

// listen for botkit controller events
controller.on('bot_channel_join', function (bot, message) {
  bot.reply(message, 'I\'m here!')
})

// Optionally you may want to listen to beepboop events
beepboop.on('add_resource', function (msg) {
  console.log('received request to add bot to team')
})

controller.hears(['hi'], ['direct_message', 'direct_mention'], function (bot, evt) {
  bot.reply(evt, 'hello from bot.js')
})
