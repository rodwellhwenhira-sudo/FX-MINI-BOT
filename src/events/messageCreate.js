const { PermissionFlagsBits } = require('discord.js');
require('dotenv').config();

module.exports = {
  name: 'messageCreate',
  execute(message, client) {
    if (message.author.bot) return;
    
    const prefix = process.env.PREFIX || 'fx!';
    
    if (!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName);
    
    if (!command) return;
    
    // Check owner-only commands
    if (command.ownerOnly && message.author.id !== process.env.OWNER_ID) {
      return message.reply('❌ This command is only available to the bot owner.');
    }
    
    // Check permissions
    if (command.permissions && !message.member.permissions.has(command.permissions)) {
      return message.reply(`❌ You don't have permission to use this command.`);
    }
    
    // Cooldown system
    if (!client.cooldowns.has(commandName)) {
      client.cooldowns.set(commandName, new Map());
    }
    
    const now = Date.now();
    const timestamps = client.cooldowns.get(commandName);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
      if (now < expirationTime) {
        const expiredTimestamp = Math.round(expirationTime / 1000);
        return message.reply(`⏱️ Please wait <t:${expiredTimestamp}:R> before reusing the \`${commandName}\` command.`);
      }
    }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    try {
      command.execute(message, args, client);
    } catch (error) {
      console.error(`Error executing command ${commandName}:`, error);
      message.reply('❌ There was an error while executing this command!');
    }
  }
};
