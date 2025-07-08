import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

// Setup __dirname in ES module (equivalent to CommonJS's __dirname)
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export async function registerCommands(client) {
    try {
        // Path to the /commands directory
        const foldersPath = path.join(__dirname, '../commands');
        const commandsFolder = fs.readdirSync(foldersPath);
        for (const entry of commandsFolder) {
            const entryPath = path.join(foldersPath, entry);
            const isDirectory = fs.statSync(entryPath).isDirectory();
            if (isDirectory) {
                // Process all .js files inside subfolder
                const commandFiles = fs.readdirSync(entryPath).filter(file => file.endsWith('.js'));
                for (const file of commandFiles) {
                    const filePath = path.join(entryPath, file);
                    const command = (await import(pathToFileURL(filePath).href)).default;
                    if ('data' in command && 'execute' in command) {
                        client.commands.set(command.data.name, command);
                    } else {
                        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
                    }
                }
            } else if (entry.endsWith('.js')) {
                // Process .js files directly in /commands (not in a subfolder)
                const command = (await import(pathToFileURL(entryPath).href)).default;
                if ('data' in command && 'execute' in command) {
                    client.commands.set(command.data.name, command);
                } else {
                    console.log(`[WARNING] The command at ${entryPath} is missing a required "data" or "execute" property.`);
                }
            }
        }
    } catch (error) {
        console.error(' Error while registering commands:', error);
    }
}