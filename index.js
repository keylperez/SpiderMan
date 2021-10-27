//https://discord.com/api/oauth2/authorize?client_id=902129788716711958&permissions=8&scope=bot

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(process.cwd(), ".env")});
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
    console.log(`SPIDERMAN IS HERE\n${client.user.tag}`);
});

client.on('messageCreate', (msg) => {
    // console.log(msg);
    if(msg.content.startsWith('hi') || msg.content.startsWith('hey') || msg.content.startsWith('wassup') || msg.content.startsWith('hello')){
        msg.reply(`Hey there ${msg.author.username}`);
    }
    if(msg.content.startsWith('gn') || msg.content.startsWith('good night') ){
        msg.reply(`Good night ${msg.author.username}!`);
    }
    if(msg.author.tag == 'Keyl#6774'){
        console.log(msg.channel.messages.fetch({limit: 100}).then(messages => {
            console.log(`Received ${messages.size} messages`);
            let ctr = 0; // gem counter msg past 100 msgs
            messages.forEach(message =>{
                if(message.author.id === '390987791754067968'){
                    console.log(message.id);
                    console.log(message.createdTimestamp);
                }
            })
        }));
    }
});




// (async () => {
//   try {
//     console.log('Started refreshing application (/) commands.');

//     await rest.put(
//       Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
//       { body: commands },
//     );

//     console.log('Successfully reloaded application (/) commands.');
//   } catch (error) {
//     console.error(error);
//   }
// })();



client.login(process.env.token);

