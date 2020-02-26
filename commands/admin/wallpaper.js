const { Command } = require('discord.js-commando');

module.exports = class WallpaperCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wallpaper',
            aliases: ['wallpaper'],
            group: 'admin',
            memberName: 'wallpaper',
            description: 'Gets you a random wallpaper'
        })
    }

    run(message) {
        return message.say('ayyy wallpaper bro');
    }
};