import { Client, Events, GatewayIntentBits, ChannelType } from 'discord.js';
import { required, submitFeedback } from './core.mjs';
const config = {
  guildId: required(process.env, 'DISCORD_GUILD_ID'),
  channelId: required(process.env, 'DISCORD_CHANNEL_ID'),
  commissionChannelId: required(process.env, 'DISCORD_COMMISSION_CHANNEL_ID')
};
if (config.channelId === config.commissionChannelId) throw new Error('Channels must be different.');
const client = new Client({ intents: [GatewayIntentBits.Guilds], rest: { retries: 0 } });
async function send(channelId, message) {
  const channel = await client.channels.fetch(channelId);
  if (channel?.type !== ChannelType.GuildText || channel.guildId !== config.guildId)
    throw Object.assign(new Error('Invalid channel'), { code: 'INVALID_CHANNEL' });
  await channel.send(message);
}
client.once(Events.ClientReady, () => console.log('FeedbackBot is ready!'));
client.on(Events.Error, () => console.error('Error connecting to Discord.'));
client.on(Events.InteractionCreate, async i => {
  if (!i.isChatInputCommand() || i.commandName !== 'feedback') return;
  try { await submitFeedback(i, config, send); }
  catch { console.error('Error completing the private reply.'); }
});
try { await client.login(required(process.env, 'DISCORD_TOKEN')); }
catch { console.error('Error starting the bot. Check the configuration.'); client.destroy(); process.exitCode = 1; }
for (const signal of ['SIGINT', 'SIGTERM'])
  process.on(signal, () => { client.destroy(); process.exit(0); });


