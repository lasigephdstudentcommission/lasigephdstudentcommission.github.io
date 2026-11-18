import test from 'node:test';
import assert from 'node:assert/strict';
import { submitFeedback } from './core.mjs';
const config = { guildId: 'g', channelId: 'public', commissionChannelId: 'private' };
function mock(overrides = {}) {
  const calls = [];
  return { calls, guildId: 'g', channelId: 'public', user: { id: 'SECRET' },
    options: { getString: (name, required) => { assert.equal(name, 'text'); assert.equal(required, true); return 'feedback @everyone'; } },
    reply: async x => calls.push(x), deferReply: async x => calls.push(x),
    editReply: async x => calls.push(x), ...overrides };
}
test('only committee receives a message; sender confirmation stays private', async () => {
  const i = mock(); const sends = [];
  await submitFeedback(i, config, async (...args) => sends.push(args));
  assert.equal(i.calls[0].flags, 64);
  assert.equal(sends[0][0], 'private');
  assert.equal(sends[0][1].content, '💬 **Anonymous feedback**\n\nfeedback @everyone');
  assert.deepEqual(sends[0][1].allowedMentions, { parse: [] });
  assert.equal(sends.length, 1);
  assert.match(i.calls.at(-1).content, /This feedback is anonymous/);
  assert.ok(!JSON.stringify(sends).includes('SECRET'));
});
test('canais, servidores e DMs errados não encaminham', async () => {
  for (const change of [{ channelId: 'other' }, { guildId: 'other' }, { guildId: null }]) {
    const i = mock(change);
    await submitFeedback(i, config, async () => assert.fail('não enviar'));
    assert.equal(i.calls[0].flags, 64);
  }
});
test('entrada vazia ou longa não é enviada', async () => {
  for (const text of [' ', 'a'.repeat(1801)]) {
    await submitFeedback(mock({ options: { getString: () => text } }), config, async () => assert.fail('não enviar'));
  }
});
test('falha na entrega privada impede aviso público', async () => {
  const i = mock(); let attempts = 0;
  await submitFeedback(i, config, async () => { attempts++; throw new Error('fail'); });
  assert.equal(attempts, 1);
  assert.match(i.calls.at(-1).content, /Delivery could not be confirmed/);
});




