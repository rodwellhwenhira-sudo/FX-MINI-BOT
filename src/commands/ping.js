module.exports = {
  data: {
    name: 'ping',
    description: 'Check bot latency'
  },
  execute(message) {
    const ping = Math.round(message.client.ws.ping);
    message.reply(`🏓 Pong! Bot latency: ${ping}ms`);
  }
};