module.exports = {
  data: {
    name: 'serverinfo',
    description: 'Get server information'
  },
  execute(message) {
    const guild = message.guild;
    message.reply({
      embeds: [{
        title: `${guild.name} Server Info`,
        color: 0x0099ff,
        fields: [
          { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
          { name: 'Members', value: guild.memberCount.toString(), inline: true },
          { name: 'Created', value: guild.createdAt.toDateString(), inline: true },
          { name: 'Channels', value: guild.channels.cache.size.toString(), inline: true },
          { name: 'Roles', value: guild.roles.cache.size.toString(), inline: true }
        ]
      }]
    });
  }
};