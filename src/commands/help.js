module.exports = {
  data: {
    name: 'help',
    description: 'Shows all available commands'
  },
  execute(message, args) {
    const commands = message.client.commands.map(cmd => `\`${cmd.data.name}\``).join(', ');
    message.reply(`**FX MINI BOT v2.0.0 - Commands**\n\n${commands}`);
  }
};