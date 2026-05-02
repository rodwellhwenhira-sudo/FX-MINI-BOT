module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`✓ Bot logged in as ${client.user.tag}`);
    console.log(`✓ Bot ID: ${client.user.id}`);
    console.log(`✓ Commands loaded: ${client.commands.size}`);
    
    // Set bot status
    client.user.setActivity('fx!help | FX MINI BOT v2.0.0', { type: 'PLAYING' });
    
    console.log(`✓ Bot is ready and connected to Discord!`);
  }
};
