const client = require('../../index.js');

client.on("interactionCreate", async(interaction) => {
    if(interaction.isCommand()) {
        await interaction.deferReply(({
            ephemeral: false,
        })).catch(() => {});
      console.log('ready')
        const cmd = client.slashCommands.get(interaction.commandName);
        if(!cmd)
        return interaction.followUp({
            content: "An Error Has Occered In Slash Command"
        });

        const guild =  client.guilds.cache.get(interaction.guildId);
        const args = [];

        for(let option of interaction.options.data) {
            if(option.type === "SUB_COMMAND") {
                if(option.name) args.push(option.name);
                option.options ?.forEach((x) => {
                    if(x.value)
                    args.push(x.value);
                })
            } else if(option.value)
            args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        cmd.run(client, interaction, guild, args);
    }
})