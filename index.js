import { Client, GatewayIntentBits } from 'discord.js'
import { config as dotenvConfig } from 'dotenv'

import { deez } from './commands/ping.js'

dotenvConfig()

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

deez(client)

client.login(process.env.CLIENT_TOKEN)