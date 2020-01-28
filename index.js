const Commando = require('discord.js-commando');

const client = new Commando.Client({
    commandPrefix: 'alexa ',
    owner: ['250066425673285632', '600483662785413142', '216285227142742018']
})

const path = require('path');

client.registry
    
    .registerGroups([
        ['admin', 'admin commands'],
        ['music', 'music commands']
    ])

    .registerDefaults()

    .registerCommandsIn(path.join(__dirname, 'commands'));

const sqlite = require('sqlite');

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.once('ready', () => {
	console.log(`${client.user.tag} online! User ID: (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('error', console.error);


client.login(process.env.BOT_TOKEN);