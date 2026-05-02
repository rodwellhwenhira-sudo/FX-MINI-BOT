module.exports = {
  data: {
    name: 'mute',
    description: 'Mute a user'
  },
  permissions: 'MuteMembers',
  async execute(message, args) {
    const user = message.mentions.users.first();
    if (!user) return message.reply('❌ Please mention a user!');
    const member = await message.guild.members.fetch(user.id);
    await member.voice.setMute(true);
    message.reply(`🔇 Muted ${user.tag}`);
  }
};