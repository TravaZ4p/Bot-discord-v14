const Discord = require("discord.js");

module.exports = {
    name: 'Dm',
    type: 2,

    run: async (client, interaction, config) => {

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return interaction.reply({ content: `Você não possui permissões para usar essa função.`, ephemeral: true })

        let member = await interaction.guild.members.fetch(interaction.targetId);
        let user = member.user

        let modal = new Discord.ModalBuilder()
            .setCustomId('Modal')
            .setTitle('Dm');

        let titu = new Discord.TextInputBuilder()
            .setCustomId('titulo')
            .setLabel("Titulo")
            .setStyle(1)
            .setPlaceholder('Digite o titulo')

        let desc = new Discord.TextInputBuilder()
            .setCustomId('descrição')
            .setLabel("Descrição da mensagem")
            .setStyle(2)
            .setPlaceholder('Digite a Descrição.')

        const titulo = new Discord.ActionRowBuilder().addComponents(titu);
        const descrição = new Discord.ActionRowBuilder().addComponents(desc);

        modal.addComponents(titulo, descrição);

        await interaction.showModal(modal);

        const modalInteraction = await interaction.awaitModalSubmit({ filter: i => i.user.id === interaction.user.id, time: 1200000_000 })

        const titul = modalInteraction.fields.getTextInputValue('titulo')
        const descs = modalInteraction.fields.getTextInputValue('descrição')

        let embed = new Discord.EmbedBuilder()
        .setColor("#2f3136")
        .setAuthor({ name: `${titul}`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setDescription(`${descs}`);

        user.send({ embeds: [embed] })

        await modalInteraction.deferUpdate()

    }
}