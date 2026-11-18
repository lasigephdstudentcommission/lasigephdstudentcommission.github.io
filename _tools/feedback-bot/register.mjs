import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import { required } from './core.mjs';
const command = new SlashCommandBuilder().setName('feedback')
  .setDescription('Send feedback! This feedback is anonymous.')
  .addStringOption(o => o.setName('text')
    .setDescription('This feedback is anonymous.')
    .setRequired(true).setMinLength(1).setMaxLength(1800));
try {
  const rest = new REST({ version: '10' }).setToken(required(process.env, 'DISCORD_TOKEN'));
  await rest.post(Routes.applicationGuildCommands(
    required(process.env, 'DISCORD_APPLICATION_ID'), required(process.env, 'DISCORD_GUILD_ID')
  ), { body: command.toJSON() });
  console.log('Command /feedback registered.');
} catch { console.error('Error registering the command. Check the configuration.'); process.exitCode = 1; }



