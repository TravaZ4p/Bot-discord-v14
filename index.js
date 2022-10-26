const Discord = require("discord.js");
const { Client, Collection } = require('discord.js');
const client = new Discord.Client({intents: [ 1, 512, 32708, 2, 128 ]});
const config = require("./config.json");
const { TOKEN, PREFIX} = require("./config.json");
const fs = require('fs')
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  
})
app.listen(3000)

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
client.config = require('./config.json')

module.exports = client;


["Event", "Slash","antiCrash"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});


client.login(process.env.TOKEN);