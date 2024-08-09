const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const apkdl = require('../lib/apkdl')

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "එය playstore වෙතින් apps බාගත කරයි."
else urlneed = "It downloads apps from playstore."

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

cmd({
    pattern: "apk",
    react: "📱",
    alias: ["findapk","playstore"],
    desc: urlneed,
    category: "download",
    use: '.apk whatsapp',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await conn.sendMessage(from , { text: imgmsg }, { quoted: mek } )        
const data2 = await apkdl.search(q)
const data = data2
if (data.length < 1) return await conn.sendMessage(from, { text: N_FOUND }, { quoted: mek } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({
title: data[i].name,
description: '',
rowId: prefix + 'dapk ' + data[i].id
});
}
const sections = [{
title: "_[Result from playstore.]_",
rows: srh
}]
const listMessage = {
text: `*╭───[🍭DARK-YASH-MD🍭]───╮*

            *👹APK DOWNLODER👹*

*📲 Apk Name:* ${q}`,
footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
title: 'Result from playstore. 📲',
buttonText: '_🔢 Reply Bellow Number_',
sections
}
await conn.listMessage(from, listMessage,mek)
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "dap",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let listdata = `🗃️ *DARK-YASH-MD APK DOWNLOADER* 🗃️
┌────────────────────────────
├ *📚 Name :* ${data.name}
├ *📦 Developer :* ${data.package}
├ *⬆️ Last update :* ${data.lastup}
├ *📥 Spize :* ${data.size}
└────────────────────────────`
await conn.sendMessage(from, { caption: listdat }, { quoted: mek })
if (data.size.includes('GB')) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
if (data.size.includes('MB') && data.size.replace(' MB','') > config.MAX_SIZE) return await conn.sendMessage(from , { text: '*File size is too big...*' }, { quoted: mek } )
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '🗃️', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})

