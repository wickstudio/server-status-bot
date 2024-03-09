const { Client, Intents, MessageEmbed } = require('discord.js');
const { token, serverId, textChannelId, updateInterval, commandPrefix, showAllMembers, showBotCount, showTextChannels, showVoiceChannels, showRoles, showBoostCount, Banner, Color, roleIdToTrack, showServerCreationDate, showServerOwner, ownerId, showServerId, language } = require('./config');
const { getTranslation } = require('./translations');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
let statusMessage = null;
let isReady = false;
let currentLanguage = language;

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Code by Wick Studio`);
  console.log(`discord.gg/wicks`);
  isReady = true;

  sendEmbed();

  setInterval(() => sendEmbed(), updateInterval);
});

client.on('messageCreate', async (message) => {
  if (message.content.toLowerCase() === commandPrefix) {
    try {
      if (message.guild.id !== serverId) {
        return message.reply('This command is only applicable in the configured server.');
      }

      await message.guild.members.fetch();
      await message.guild.channels.fetch();
      await message.guild.roles.fetch();

      const textChannels = message.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size;
      const voiceChannels = message.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size;

      const embed = new MessageEmbed()
        .setTitle(getTranslation('serverStatus', currentLanguage))
        .setColor(Color)
        .setFooter(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setImage(Banner);

      if (showAllMembers) {
        embed.addFields({ name: getTranslation('members', currentLanguage), value: `${message.guild.memberCount}`, inline: true });
      }
      if (showBotCount) {
        embed.addFields({ name: getTranslation('bots', currentLanguage), value: `${message.guild.members.cache.filter(member => member.user.bot).size}`, inline: true });
      }
      if (showTextChannels) {
        embed.addFields({ name: getTranslation('textChannels', currentLanguage), value: `${textChannels}`, inline: true });
      }
      if (showVoiceChannels) {
        embed.addFields({ name: getTranslation('voiceChannels', currentLanguage), value: `${voiceChannels}`, inline: true });
      }
      if (showRoles) {
        const role = message.guild.roles.cache.get(roleIdToTrack);

        if (role) {
          const membersWithRole = role.members.size;
          embed.addFields({ name: getTranslation('roleMembers', currentLanguage), value: `${membersWithRole}`, inline: true });
        } else {
          console.error(`Role with ID ${roleIdToTrack} not found in the server.`);
        }
      }
      if (showBoostCount) {
        const boostCount = message.guild.premiumSubscriptionCount || 0;
        embed.addFields({ name: getTranslation('boosts', currentLanguage), value: `${boostCount}`, inline: true });
      }

      if (showServerId) {
        embed.addFields({ name: getTranslation('serverId', currentLanguage), value: `${message.guild.id}`, inline: true });
      }

      if (showServerCreationDate) {
        const serverCreationTimestamp = message.guild.createdAt.getTime();
        embed.addFields({ name: getTranslation('createdAt', currentLanguage), value: `<t:${Math.floor(serverCreationTimestamp / 1000)}:R>`, inline: true });
      }

      if (showServerOwner) {
        const owner = message.guild.members.cache.get(ownerId);

        if (owner) {
          embed.addFields({ name: getTranslation('serverOwner', currentLanguage), value: owner.user.tag, inline: true });
        } else {
          console.error('Server owner not found using the provided owner ID from config.');
          console.log('Guild info:', message.guild);
          console.log('Owner ID from config:', ownerId);
        }
      }

      embed.addFields({ name: getTranslation('lastUpdated', currentLanguage), value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true });

      if (statusMessage) {
        statusMessage.edit({ embeds: [embed] });
      } else {
        const channel = message.guild.channels.cache.get(textChannelId);
        if (channel && channel.isText()) {
          statusMessage = await channel.send({ embeds: [embed] });
        } else {
          console.error(`Unable to send embed. No valid text channel found in the server with ID: ${serverId}`);
        }
      }
    } catch (error) {
      console.error('Error fetching server information:', error);
      message.reply('An error occurred while fetching server information.');
    }
  }
});

async function sendEmbed() {
  if (!isReady) {
    return;
  }

  try {
    const guild = client.guilds.cache.get(serverId);
    if (!guild) {
      console.error(`Bot is not in the server with ID: ${serverId}`);
      return;
    }

    await guild.members.fetch();
    await guild.channels.fetch();
    await guild.roles.fetch();

    const textChannels = guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size;
    const voiceChannels = guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size;

    const embed = new MessageEmbed()
      .setTitle(getTranslation('serverStatus', currentLanguage))
      .setColor(Color)
      .setFooter(guild.name)
      .setThumbnail(guild.iconURL())
      .setImage(Banner);

    if (showAllMembers) {
      embed.addFields({ name: getTranslation('members', currentLanguage), value: `${guild.memberCount}`, inline: true });
    }
    if (showBotCount) {
      embed.addFields({ name: getTranslation('bots', currentLanguage), value: `${guild.members.cache.filter(member => member.user.bot).size}`, inline: true });
    }
    if (showTextChannels) {
      embed.addFields({ name: getTranslation('textChannels', currentLanguage), value: `${textChannels}`, inline: true });
    }
    if (showVoiceChannels) {
      embed.addFields({ name: getTranslation('voiceChannels', currentLanguage), value: `${voiceChannels}`, inline: true });
    }
    if (showRoles) {
      const role = guild.roles.cache.get(roleIdToTrack);

      if (role) {
        const membersWithRole = role.members.size;
        embed.addFields({ name: getTranslation('roleMembers', currentLanguage), value: `${membersWithRole}`, inline: true });
      } else {
        console.error(`Role with ID ${roleIdToTrack} not found in the server.`);
      }
    }
    if (showBoostCount) {
      const boostCount = guild.premiumSubscriptionCount || 0;
      embed.addFields({ name: getTranslation('boosts', currentLanguage), value: `${boostCount}`, inline: true });
    }

    if (showServerId) {
      embed.addFields({ name: getTranslation('serverId', currentLanguage), value: `${guild.id}`, inline: true });
    }

    if (showServerCreationDate) {
      const serverCreationTimestamp = guild.createdAt.getTime();
      embed.addFields({ name: getTranslation('createdAt', currentLanguage), value: `<t:${Math.floor(serverCreationTimestamp / 1000)}:R>`, inline: true });
    }

    if (showServerOwner) {
      const owner = guild.members.cache.get(ownerId);

      if (owner) {
        embed.addFields({ name: getTranslation('serverOwner', currentLanguage), value: owner.user.tag, inline: true });
      } else {
        console.error('Server owner not found using the provided owner ID from config.');
        console.log('Guild info :', guild);
        console.log('Owner ID from config :', ownerId);
      }
    }

    embed.addFields({ name: getTranslation('lastUpdated', currentLanguage), value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true });

    if (statusMessage) {
      statusMessage.edit({ embeds: [embed] });
    }
  } catch (error) {
    console.error('Error fetching server information:', error);
  }
}

client.login(token);
