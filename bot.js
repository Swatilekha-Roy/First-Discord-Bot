require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"]
})

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
    console.log('Bot is ready!')
})

client.on('messageDelete', msg => {
    msg.reply("Big Bro is watching! Stop deleting messages.")
})

client.on('message', msg => {
    if(msg.content == 'Avada')
    {
        msg.react("🪄")
    }
    if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`)
    {
        modUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("832168164280107009")
}

client.login(process.env.BOT_TOKEN)