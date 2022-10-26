
const client = require('../../index.js');
const Discord = require('discord.js')
const colors = require('colors')

 client.once('ready', c => {
	
  console.log(( `👑╵ HISTÓRICO`.black)),
  console.log(( `${client.user.tag} Está online! `.cyan)),
  console.log(( `Estou em ${client.guilds.cache.size} servidores.`.blue)), 
  console.log(( `Cuidando de ${client.users.cache.size} membros.`.cyan)),
  console.log(( `👑╵ VERIFICAÇÃO`.black)),
  console.log(( `Ping de inicialização:  ${client.ws.ping} ms`.blue))
 
    });

client.once('ready', async () => {
    
    let a1 = ["Digite &help"],i = 0;
    setInterval(() => client.user.setActivity(`${a1[i++ % a1.length]}`,{
    type:
      "STREAMING", url:"LINK DO PERFIL DA LIVE"}//PLAYING, LISTENING, STREAMING
    ), 5000)
}); 
