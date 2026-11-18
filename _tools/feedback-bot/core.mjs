export function required(env, key) {
  const value = env[key]?.trim();
  if (!value) throw new Error('Missing configuration: ' + key);
  return value;
}
const privateReply = content => ({ content, allowedMentions: { parse: [] } });
export async function submitFeedback(i, config, send) {
  if (i.guildId !== config.guildId || i.channelId !== config.channelId) {
    await i.reply({ ...privateReply('Use /feedback in the feedback channel.'), flags: 64 });
    return;
  }
  const text = i.options.getString('text', true).trim();
  if (!text || text.length > 1800) {
    await i.reply({ ...privateReply('Enter between 1 and 1800 characters.'), flags: 64 });
    return;
  }
  // The sender receives an ephemeral reply; only the committee channel gets a message.
  await i.deferReply({ flags: 64 });
  try {
    await send(config.commissionChannelId, {
      content: '💬: ' + text, allowedMentions: { parse: [] }
    });
  } catch (error) {
    console.error('Error confirming delivery. ' + deliveryDiagnostic(error));
    await i.editReply(privateReply('Delivery could not be confirmed. Your feedback may have been received; submitting again may create a duplicate.'));
    return;
  }
  await i.editReply(privateReply('Feedback received and delivered. Thank you!'));
}


export function deliveryDiagnostic(error) {
  const reasons = {
    50001: 'The bot does not have access to the committee channel (Missing Access).',
    50013: 'Missing permissions: View Channel and Send Messages (Missing Permissions).',
    10003: 'Channel does not exist or incorrect ID (Unknown Channel).',
    INVALID_CHANNEL: 'The destination must be a text channel in this server.'
  };
  return reasons[error?.code] ?? 'Connection or submission failed; check the channel configuration.';
}


