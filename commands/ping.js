
const deez = (client) => {
    client.on('messageCreate', (msg) => {
        if (msg.content === 'DEEZ') {
            console.log(true);
            msg.reply('NUTS')
        }
    })
}

export { deez }