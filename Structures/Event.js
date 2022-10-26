const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const colors = require('colors');
let table = new ascii("Events");
table.setHeading('EVENTOS', ' CARREGANDO STATUS');

module.exports = (client) => {
    readdirSync('./Events/').forEach(dir => {
        const events = readdirSync(`./Events/${dir}`).filter(file => file.endsWith('.js'));
        for(let file of events) {
            let pull = require(`../Events/${dir}/${file}`);
            if(pull.name) {
                client.events.set(pull.name, pull);
            } else {
                table.addRow(file, 'EVENTO CARREGANDO'.cyan)
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}