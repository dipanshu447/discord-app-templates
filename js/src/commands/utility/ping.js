import { SlashCommandBuilder } from "discord.js";

export default {
    // Define command data: name and description
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with a Pong!'),
        
    // The function that runs when the command is invoked
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
}