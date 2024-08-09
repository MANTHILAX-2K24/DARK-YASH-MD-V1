const { tiktokdl } = require('tiktokdl')
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
var monspace ='```'

cmd({
    pattern: "tiktok",
    alias: ["ttwm"],
    react: '✨',
    desc: "Download tiktok videos",
    category: "download",
    use: '.tiktok <tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if (!q) return await  reply('*Please give me tiktok url !!*')
let wm = '⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁' 
let response = await tiktokdl(q)
let { video } = response
let { music } = response
await conn.sendMessage(from, { video: { url: video }, caption: wm,}, { quoted: mek })
//await conn.sendMessage(from, { audio: { url: music }, caption: wm,mimetype:"audio/mpeg"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
} catch (e) {
reply('Error !!')
console.log(e)
}
})

cmd({
    pattern: "tiktokmp3",
    react: '🎉',
    desc: "Download tiktok audios",
    category: "download",
    use: '.tiktokaudio <tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if (!q) return await  reply('*Please give me tiktok url !!*')
let wm = '*`✦ TIKTOK DOWNLODER ✦`*\n\n⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁' 
let wwm = 'yash'
let response = await tiktokdl(q)

let { music } = response
//await conn.sendMessage(from, { video: { url: video }, caption: wm,}, { quoted: mek })
let tt = await conn.sendMessage(from, { audio: { url: music }, caption: wm,mimetype:"audio/mpeg"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: '🎶', key: tt.key }})
return await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
} catch (e) {
reply('Error !!')
console.log(e)
}
})


cmd({
    pattern: "tiktokdoc",
    react: '🎉',
    desc: "Download tiktok document",
    category: "downloaddd",
    use: '.tiktokdocument <tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if (!q) return await  reply('*Please give me tiktok url !!*')
let wm = '\n⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁' 
let wwm = 'yash'
let response = await tiktokdl(q)

let { music } = response
//await conn.sendMessage(from, { video: { url: video }, caption: wm,}, { quoted: mek })
await conn.sendMessage(from, { document: { url: music }, caption: wm,mimetype:"audio/mpeg",fileName:"Tik Tok Audio.mp3"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
} catch (e) {
reply('Error !!')
console.log(e)
}
})

                              
cmd({
    pattern: "tiktoknowm",
    alias: ["tiktokwwm"],
    react: '✨',
    desc: "Download tiktok videos",
    category: "downloaddd",
    use: '.tiktoknowm <tiktok link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if (!q) return await  reply('*Please give me tiktok url !!*')
let nowm = '\n⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁' 
let response = await tiktokdl(q)
let { video } = response
let { music } = response
await conn.sendMessage(from, { video: { url: video }, caption: nowm,}, { quoted: mek })
//await conn.sendMessage(from, { audio: { url: music }, caption: wm,mimetype:"audio/mpeg"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
} catch (e) {
reply('Error !!')
console.log(e)
}
})
