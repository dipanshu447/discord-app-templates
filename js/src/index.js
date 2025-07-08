import config from './config.js';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { registerCommands } from './handlers/commandHandler.js';
import { registerEvents } from './handlers/eventHandler.js';

// Create a new Discord client instance with required intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,           // For guild-related events
        GatewayIntentBits.MessageContent,   // To read message content (for prefix-based features)
        GatewayIntentBits.GuildMessages     // To receive messages from text channels
    ]
});
// Initialize a collection to store commands (key: command name, value: command object)
client.commands = new Collection();

try {
    console.log("Bot is starting...");
    await registerCommands(client);  // Load and register slash commands from /commands
    registerEvents(client);          // Load and register event listeners from /events
    client.login(config.token);      // Login to Discord using your bot token
} catch (error) {
    console.error('Failed to start bot:', error);
}