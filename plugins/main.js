const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "alive",
    react: "🍬",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const alivem = `👋 Hello *${pushname}* I'm alive now..

*☃️ I'am Whatsapp Bot hi☃️*\n\n`

await conn.sendMessage(from, { image: { url: config.LOGO }, caption: alivem + "\n" + "⦁ ᴘᴏᴡʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "ping",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, o, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
await conn.edit(ping, '*📍 Pong* *' + (final - inital) + ' ms* ' )
return await conn.sendMessage(from, { react: { text: "✔️", key: ping.key } });
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
  pattern: "menu",
  react: "📂",
  alias: ["panel","list","commands"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
const buttons = [
{buttonId: prefix + 'downmenu' , buttonText: {displayText:  '*DOWNLOAD*'}, type:1},
{buttonId: prefix + 'searchmenu' , buttonText: {displayText: '*SEARCH*'}, type: 1},
{buttonId: prefix + 'groupmenu' , buttonText: {displayText: '*GROUP*'}, type: 1},
{buttonId: prefix + 'convertmenu' , buttonText: {displayText: '*CONVERT*'}, type: 1},
{buttonId: prefix + 'mainmenu' , buttonText: {displayText: '*MAIN*'}, type: 1},
{buttonId: prefix + 'mathsmenu' , buttonText: {displayText: '*MATHS*'}, type: 1},
{buttonId: prefix + 'ownermenu' , buttonText: {displayText: '*OWNER*'}, type: 1},
{buttonId: prefix + 'adminmenu' , buttonText: {displayText: '*ADMIN*'}, type: 1}
]
const buttonMessage = {
  image: {url:"https://telegra.ph/file/3577937c19f20c05ff4e4.jpg"},
  caption: `${monspace}👋 𝗛𝗘𝗟𝗟𝗢... ${pushname}${monspace}
   
*╭─「👹ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ👹」*
┃ *➩⚙️ ʀᴜɴ ᴛɪᴍᴇ -* ${runtime(process.uptime())}
┃ *➩⚙️ ʀᴀᴍ ᴜꜱᴀɢᴇ -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────⦁⦁➤*
╭───────────⦁⦁➤
*│* *⛵ LIST PANEL*
 *|*  ⦁─────────⦁`,
  footer: "*💥 Reply the Number you want to select*",
  buttons: buttons,
  headerType: 2
}
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})  

cmd({
    pattern: "system",
    alias: ["os"],
    desc: "Check bot system info.",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const maru =`┌───────────────────────
├ ⏰ *\`Uptime :-\`*  ${runtime(process.uptime())}
├ 📟 *\`Ram usage :-\`* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *\`Platform :-\`*  Heroku
├ 👨‍💻 *\`Owners :-\`* M.G.Manthila
├ 🧬 *\`Version :-\`* 1.0.0
└───────────────────────`
 let system = await conn.sendMessage(from , { text: maru }, { quoted: mek } )
 return await conn.sendMessage(from, { react: { text: "📟", key: system.key } });
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "about",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const about = `*👋 Helloᴡ...*

  🎉   I am Dark Yash Md... 
   💥 _Whatsapp Bot Created  By *M.G.Manthila...*_

   ⦁  🧨 *\`ᴛᴇᴀᴍ -:\`* ᴅᴀʀᴋᴍᴀxᴛᴇᴀᴍ
   ⦁ *👨‍💻 \`ᴏᴡɴᴇʀ -:\`* ᴍ.ɢ.ᴍᴀɴᴛʜɪʟᴀ
   ⦁ 💡 *\`ʟᴀɴɢᴜᴀɢᴇ -:\`* ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ

  *✨ Thanks For Using Dark Yash Md Bot...*
*•──────────────────────────•*`
const buttons = [
  {buttonId: prefix + 'script' , buttonText: {displayText: '📚 Repository'}, type: 1},
  {buttonId: prefix + 'ping' , buttonText: {displayText: '⚡ Ping'}, type: 1},
  {buttonId: prefix + 'owner' , buttonText: {displayText: '👨‍💻 Owner'}, type: 1},
  {buttonId: prefix + 'website' , buttonText: {displayText: '🌍 Website'}, type: 1}
]
const buttonMessage = {
    image: {url: config.LOGO},
    caption: "*👋 Helloᴡ...*\n\n  🎉   I am Dark Yash Md...\n  💥 _Whatsapp Bot Created  By *M.G.Manthila...*_\n\n   ⦁ 🧨 *ᴛᴇᴀᴍ-:* ᴅᴀʀᴋᴍᴀxᴛᴇᴀᴍ\n   ⦁ 👨‍💻 *ᴏᴡɴᴇʀ-:* ᴍ.ɢ.ᴍᴀɴᴛʜɪʟᴀ\n   ⦁ 💡  *ʟᴀɴɢᴜᴀɢᴇ-:* ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ\n\n*✨ Thanks For Using Dark Yash Md...*\n*•───────────────────────•*\n",
    footer: "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ",
    buttons: buttons,
    headerType: 2
  }
  await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply('*Error !!*' + e )
console.log(e)
}
})

cmd({
    pattern: "report",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "owner",
    use: '.report',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hame = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const livemm = `*The report send to the owner's of the bot* ✔️`
await conn.sendMessage(from, { text: livemm }, { quoted: mek })
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "ownerrss",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.o',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const botdek = `*╭┈┈┄[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┄┈┈╮*

    *🎗️DARK YASH INFORMATION🎗️*

┏━━━━━━━━━━━━━━━━━━━━━━┓
┣ *❄ BOT NAME -:* DARK YASH MD
┣ *👮 OWNER NAME -:* MANTHILA
┣ *👨‍💻 OWNER NUMBER -:* 743218422
┣ *📡 MODE -:* PRIVATE 
┣ *⚕️ PREFIX -:* [MULTI PREFIX]
┣ *⚙️ PLATFORM -:* HEROKU
┣ *🧬 VERSION -:* 2.0.0
┗━━━━━━━━━━━━━━━━━━━━━━┛
`
await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/1b4af9f4e49249865611a.jpg" }, caption: botdek + "\n" + "⦁ ᴘᴏᴡʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "🧑‍💻", key: botde.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "bottts",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const ownerm = `*╭┈┄┈[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┈┄┈╮*

      *🎗️OWNER INFORMATION🎗️*
_______________
𝗠ʏ 𝙸ɴꜰᴏʀᴍᴀᴛɪᴏɴ___😚💐
_________
60% ▰▰▰▰▰▰▱▱▱▱ 100% 𝐂ᴏᴍᴘʟᴇᴛᴇᴅ ✅
┏━━━━━━━━━━━━━━━━━━━━┓
┃〲Nᴀᴍᴇ ❝ ᴍ.ɢ.ᴍᴀɴᴛʜɪʟᴀ ❞ 🐣
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Fʀᴏᴍ ❝ 𝙶ᴀʟʟᴇ ❞ ☘️💐
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Aɢᴇ ❝ 17 ᴏʟᴅ ❞ 🌝✨
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Sᴇx ❝ 𝙼ᴀʟᴇ ❞ 🍼🧩
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃ 〲Eᴅᴜ ❝ ꜱᴛᴜᴅʏ ❞ 💰💳
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━┓
┃〲Cᴏᴜɴᴛʀʏ ❝ ꜱʀɪ ʟᴀɴᴋᴀ ❞ 🏴‍☠️🇱🇰
┗━━━━━━━━━━━━━━━━━━━━┛
`

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/f8b0f3a7501959871f2ca.jpg" }, caption: ownerm + "\n" + "⦁ ᴘᴏᴡʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "🧑‍💻", key: txm.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "ownerrr",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const ownerm = `
*👨‍💻 DARK-YASH-MD OWNER 👨‍💻*

 ⦁ *ᴏᴡɴᴇʀ ɴᴜᴍᴇʀ -:* 94743218422

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ`

let ownermel = await conn.sendMessage(from, { text: ownerm }, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "🧑‍💻", key: ownermel.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "website",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const webme = `*🔥 DARK-YASH-MD WEBSITE 🔥*

🪀 *ʏᴏᴜ ᴄᴀɴ ᴄʀᴇᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ ᴀɴᴅ        ꜱᴇᴇ ᴛʜᴇ ᴅᴇᴘʟᴏʏ ᴍᴇᴛʜᴏᴅꜱ ꜰʀᴏᴍ ᴛʜᴇ ᴡᴇʙꜱɪᴛᴇ ʙᴇʟʟᴏᴡ...*👇

*🌍 ᴡᴇʙꜱɪᴇ -:* https://dark-yash-md-offical.vercel.app/

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ`

let webmell = await conn.sendMessage(from, { text: webme }, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "✔️", key: webmell.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "help",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const helpme = `*🔖 Please Give me a Command Name...!*`
let hellpp = await conn.sendMessage(from, { text: helpme }, { quoted: mek })
return await conn.sendMessage(from, { react: { text: "❓", key: hellpp.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}   
})
    
cmd({
    pattern: "news",
    react: "🗞️",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.news',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const newsme = `🗞️ *DARK YASH NEWS CENTER (24 HOURS)* 📡

*⛬ ➜ Select the type of news you want and mention this message and reply to the relevant number...*`
const buttons = [
  {buttonId: prefix + 'deranaaa' , buttonText: {displayText: 'DERANA NEWS'}, type: 1},
  {buttonId: prefix + 'esanaaa' , buttonText: {displayText: 'ESANA NEWS'}, type: 1},
  {buttonId: prefix + 'sporttt' , buttonText: {displayText: 'SPORTY NEWS'}, type: 1}
]
const buttonMessage = {
    image: {url: "https://telegra.ph/file/218c813e9b6ee1dfcbaf8.jpg"},
    caption: "🗞️ *DARK YASH NEWS CENTER (24 HOURS)* 📡\n\n*⛬ ➜ Select the type of news you want and mention this message and reply to the relevant number...*\n\n╭───────────⦁⦁➤",
    footer: "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ",
    buttons: buttons,
    headerType: 2
  }
  let newsssl = await conn.buttonMessage(from, buttonMessage, mek)
  return await conn.sendMessage(from, { react: { text: "🔢", key: newsssl } });
} catch (e) {
reply('*Error !!*' + e )
console.log(e)
}
})

cmd({
    pattern: "botinfo",
    react: "⚡",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.botinfo',
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const newsme = `*╭┈┈┈[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┈┈┈╮*

      *🎗️DETAILS INFO FETCHER🎗️*

*⛬ ➜ You can select the type of details you want here and get it by answering the numbers here...*
`
const buttons = [
  {buttonId: prefix + 'ownerrss' , buttonText: {displayText: '🕯️BOT DETAILS'}, type: 1},
  {buttonId: prefix + 'bottts' , buttonText: {displayText: '👨‍💻 OWNER DETAILS'}, type: 1},
  {buttonId: prefix + 'botinfo' , buttonText: {displayText: '🔄 REFESH RESULT'}, type: 1}
]
const buttonMessage = {
    image: {url: "https://telegra.ph/file/3117ab5de43cf2fcf6b86.jpg"},
    caption: "*╭┈┈┈[🧑‍🔧 DARK YASH MD 🧑‍🔧 ]┈┈┈╮*\n\n      *🎗️DETAILS INFO FETCHER🎗️*\n\n*⛬ ➜ You can select the type of details you want here and get it by answering the numbers here...*\n\n*╭──────────────────⦁⦁➤*",
    footer: "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ",
    buttons: buttons,
    headerType: 3
  }
  let newsssl = await conn.buttonMessage(from, buttonMessage, mek)
  return await conn.sendMessage(from, { react: { text: "🔢", key: newsssl } });
} catch (e) {
reply('*Error !!*' + e )
console.log(e)
}
})

cmd({
    pattern: "panels",
    react: "🙂",
    alias: ["panels","lists","commandss"],
    desc: "Get bot\'s command list.",
    category: "maim",
    use: '.panels',
    filename: __filename
},

async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc1 = `h`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
   if(!commands[i].dontAddCommandList){
menuc1 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc2 = `hi`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
menuc2 += `*│⩥* .${commands[i].pattern}\n`
  }}};

let menuc3 = `moo`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
   if(!commands[i].dontAddCommandList){
menuc3 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc4 = `kool`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc4 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc5 = `jeje`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc5 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc6 = `oool`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
   if(!commands[i].dontAddCommandList){
menuc6 += `*│⩥* .${commands[i].pattern}\n`
}}};
    
let menumg = `*HELLO 👋*  ${pushname}

*╭─「💦ꜱʀɪ ʟᴀɴᴋᴀɴ ɴᴇᴡꜱ ʙᴏᴛ💦」*
┃ *➩⚙️ ʀᴜɴ ᴛɪᴍᴇ -* ${runtime(process.uptime())}
┃ *➩⚙️ ʀᴀᴍ ᴜꜱᴀɢᴇ -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰───────────●●►*

     *⚡News Bot Command Panel*
     *⦁──────────────────⦁*
              
*🕵️‍♂️Main Commands*

${menuc1}

*🕵️‍♂️Group Commands*

${menuc2}

🕵️‍♂️Main Commands*

${menuc3}

*🕵️‍♂️Group Commands*

${menuc4}

🕵️‍♂️Main Commands*

${menuc5}

*🕵️‍♂️Group Commands*

${menuc6}
*╰────────────●●►*

*💥 Reply The Number you want to Select.*`
     
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek, messageId:genMsgId() })
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})  
