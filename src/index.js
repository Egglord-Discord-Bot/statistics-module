const { Client, GatewayIntentBits: FLAGS, Partials } = require('discord.js'),
	{ token } = require('./config.js');

const bot = new Client({
	partials: [Partials.GuildMember, Partials.User],
	intents: [FLAGS.Guilds, FLAGS.GuildMembers],
});

bot.channelStats = {};
bot.voiceStats = {};

bot.on('ready', async (client) => {
	console.log(`${client.user.username} is online.`);
	for (const guild of bot.guilds.cache.values()) {
		await guild.members.fetch();
	}

	require('./website')(bot);
});

bot.login(token);
