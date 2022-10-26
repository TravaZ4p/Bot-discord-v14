let slash = []
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Slash Commands");
const colors = require("colors")
table.setHeading('Slash Command', ' Carregando status');
module.exports = (client) => {
    readdirSync("./SlashCommands/").forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter(file => file.endsWith(".js"));
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
            if (pull.name) {
                client.slashCommands.set(pull.name, pull);
                slash.push(pull);
                table.addRow(file, 'SLASH COMMAND FUNCIONANDO'.green);
            } else {
                table.addRow(file, `SLASH COMMAND ERRO`.red);
                continue;
             }
          }
    });
    console.log(table.toString());
client.on("ready",async ()=> {
    await client.application.commands.set(slash)
 })
}