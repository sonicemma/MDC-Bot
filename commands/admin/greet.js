const { Command } = require('discord.js-commando');

module.exports = class GreetCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'greet',
            aliases: ['hello'],
            group: 'admin',
            memberName: 'greet',
            description: 'Causes MDC Bot to greet you.'
        })
    }

    run(message) {
        return message.say('Greetings!')
    }
};