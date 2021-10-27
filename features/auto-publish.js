// module.exports = client => {
//     client.on('message', msg => {
//         console.log('message sent');
//         const { channel } = msg;

//         console.log(channel.type);
//         if(channel.type === 'news'){
//             msg.crosspost();
//             console.log('published news message');
//         }
//     })
// }