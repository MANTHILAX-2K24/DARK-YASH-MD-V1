const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const isYasiya = "94743548986@s.whatsapp.net"

cmd({
        pattern: "restart",
        desc: "To restart bot",
        category: "main",
        filename: __filename
    },
  async(conn, mek, m,{from, l, quoted, body, isCmd, isYasiya, isMe, command, args, q, isdev, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isCreator, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

    try{   
            if ( !isdev && !isMe && !isYasiya ) return await reply("*Your not a moderater bot*")
const mass = await conn.sendMessage(m.chat, {text : '*⚡ DARK-YASH-MD IS RESTARTING...*'})
await conn.sendMessage(m.chat, {  react: {  text: "🔄",   key: mass.key }})
        const { exec } = require("child_process") 
           exec('pm2 restart all')
} catch (e) {
reply('*Error !!*\n\n' + e )
console.log(e)
}
})
