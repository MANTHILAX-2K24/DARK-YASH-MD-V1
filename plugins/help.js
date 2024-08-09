const config = require('../config')
const os = require('os')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "helpfb",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpfb',
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
const fbme = `*╭───[ 🧙‍♂️ FB COMMAND 🧙‍♂️]───╮*

🕯️  You can download the videos in Facebook with this command..

🎗️ *මෙම විධානය මගින් Facebook විඩිඔ බාගත කළ හැක.*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: fbme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpvideo",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpvideo',
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
const videome = `*╭───[ 🧙‍♂️ VIDEO COMMAND 🧙‍♂️]───╮*
 
🕯️  This command can download videos from YouTube.

🎗️ *මෙම විධානය මගින් YouTube වෙතින් වීඩියෝ බාගත කළ හැක.*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: videome }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helprestart",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helprestart',
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
const restme = `*╭───[ 🧙‍♂️ RESTART COMMAND 🧙‍♂️]───╮*

🕯️ This can restart the bot. [restart].

🎗️ *මෙයින් බොට් නැවත ආරම්භ කළ හැකිය. [restart]...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: restme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpyts",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpyts',
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
const ytsme = `*╭───[ 🧙‍♂️ YTS COMMAND 🧙‍♂️]───╮*

🕯️ *You can search a word on youtube and get information there.*

🎗️ *වචනයක් යොදා එහි විස්තර Youtube එකෙන් සොයාගත හැක...* 

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: ytsme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpjid",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpjid',
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
const jidme = `*╭───[ 🧙‍♂️ JID COMMAND 🧙‍♂️]───╮*

🕯️ *You can get group jid address.*

🎗️ *මෙයින් ගෘප් එකක jid address එක ලබාගත හැකිය...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: jidme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpsong",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpsong',
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
const songme = `*╭───[ 🧙‍♂️ SONG COMMAND 🧙‍♂️]───╮*

🕯️ This command can download songs from YouTube.

 🎗️ *මෙම විධානය මගින් YouTube වෙතින් ගීත බාගත කළ හැක...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: songme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpsystem",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpsystem',
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
const systemme = `*╭──[ 🧙‍♂️ SYSTEM COMMAND 🧙‍♂️]──╮*

🕯️ *Check bot runing system information.*

🎗️ *බොට්ගෙ ධාවන පද්ධති තොරතුරු පරීක්ෂා කළ හැකිය.[system]...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: systemme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpgroup",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpgroup',
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
const groupme = `*╭──[ 🧙‍♂️ GROUP COMMAND 🧙‍♂️]──╮*

🕯️ This enables or disables the features of a group.

🎗️ *මෙයින් ගෘප් එකක විශේශාංග සක්‍රීය හෝ අක්‍රීය කළ හැකිය...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: groupme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helptiktok",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helptiktok',
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
const tiktokme = `*╭───[ 🧙‍♂️ TIKTOK COMMAND 🧙‍♂️]───╮*

🕯️ You can downlod the vidoes in Tiktok with this commands.

🎗️ *මෙම විධානය මගින් Tiktok විඩිඔ බාගත ගත හැක...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: tiktokme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpalive",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpalive',
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
const helpko = `*╭───[ 🧙‍♂️ ALIVE COMMAND 🧙‍♂️]───╮*

🕯️ This command lets you know if the bot is running.

🎗️ *මෙම විධානය මඟින් බොට් ක්‍රියාත්මකද යන්න දැන ගැනීමට හැකියාව ඇත...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: helpko }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpapply",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpapply',
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
const applyme = `*╭───[ 🧙‍♂️ APPLY COMMAND 🧙‍♂️]───╮*

🕯️ The bot's env can be modified by [ alive_msj, alive_img, anti_bad_word, sudo, owner_name, dl_size , and many more.].

 🎗️ *බොට්ගේ env මෙයින් වෙනස් කළ හැකිය [ alive_msj, alive_img, anti_bad_word, sudo, owner_name, dl_size , සහ තවත් බොහෝ දේ.]*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: applyme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "helpsettings",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "mainn",
    use: '.helpsettings',
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
const settingme = `*╭──[ 🧙‍♂️ SETTINGS COMMAND 🧙‍♂️]──╮*

🕯️ This enables or disables the bot's features [change Env].

🎗️ *මෙයින් බොට්ගේ විශේශාංග සක්‍රීය හෝ අක්‍රීය කළ හැකිය.[change Env]...*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ*`

let help = await conn.sendMessage(from, { text: settingme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "✔️", key: help.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})


cmd({
    pattern: "cmds",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "search",
    use: '.cmds',
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
const settingme = `*❌ No Such commands.*`

let de = await conn.sendMessage(from, { text: settingme }, { quoted: mek })
 await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdmenu",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdmenu',
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
const settingme = `*🍁Command:* menu
*🧩Type:* main
✨FileName: /app/plugins/md-main.js`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdalive",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdalive',
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
const settingme = `*🍁Command:* alive
*🧩Type:* main
✨FileName: /app/plugins/md-main.js`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdsystem",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdsystem',
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
const settingme = `*🍁Command:* system
*🧩Type:* main
✨FileName: /app/plugins/md-main.js`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdping",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdping',
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
const settingme = `*🍁Command:* ping
*🧩Type:* main
✨FileName: /app/plugins/md-main.js`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdfb",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdfb',
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
const settingme = `*🍁Command:* fb
*🧩Type:* downloded
✨FileName: Not Provided`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdtiktok",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdtiktok',
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
const settingme = `*🍁Command:* tiktok
*🧩Type:* downloded
✨FileName: Not Proveded`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

cmd({
    pattern: "cmdyt",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: '.cmdyt',
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
const settingme = `*🍁Command:* yts
*🧩Type:* search
✨FileName: Not Provided`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: de.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})


cmd({
    pattern: "npm",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "search",
    use: 'npm',
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
const settingme = `*🔖 Please provide the npm package name you want!*`

let np = await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: np.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})


cmd({
    pattern: "npmytdl",
    alias: ["helpfb","helpfb","helpfb"],
    desc: "Check bot online or no.",
    category: "searchh",
    use: 'npmytdl',
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
const settingme = `*ytdl* (v1.4.1)
_https://www.npmjs.com/package/ytdl_
_A command line streaming youtube video downloader._

*ytdl-core* (v4.11.0)
_https://www.npmjs.com/package/ytdl-core_
_YouTube video downloader in pure javascript._

*@distube/ytdl-core* (v4.11.3)
_https://www.npmjs.com/package/%40distube%2Fytdl-core_
_YouTube video downloader in pure javascript._

*@cliqz/ytdl-core* (v0.20.2)
_https://www.npmjs.com/package/%40cliqz%2Fytdl-core_
_Youtube video downloader in pure javascript._

*@sushibtw/ytdl-core* (v1.0.1-patch)
_https://www.npmjs.com/package/%40sushibtw%2Fytdl-core_
_YouTube video downloader in pure javascript._

*ytdl-getinfo* (v1.1.0)
_https://www.npmjs.com/package/ytdl-getinfo_
_Gets video information using youtube-dl_

*youtubei.js* (v1.4.3)
_https://www.npmjs.com/package/youtubei.js_
_A full-featured wrapper around YouTube's private API. Allows you to retrieve info about any video, subscribe, unsubscribe, like, dislike, comment, search, download videos/music and much more!_

*ytdl-core-new* (v1.1.2)
_https://www.npmjs.com/package/ytdl-core-new_
_Youtube video downloader in pure Javascript._

*@spacepumpkin/ytdl-core* (v4.11.22052103)
_https://www.npmjs.com/package/%40spacepumpkin%2Fytdl-core_
_YouTube video downloader in pure javascript._

*@ytdl/ytdl* (v1.4.16)
_https://www.npmjs.com/package/%40ytdl%2Fytdl_
_A CLI/Library written in typescript/javascript, which allows you to download/play videos from YouTube onto your system._

*discord-ytdl-core* (v5.0.4)
_https://www.npmjs.com/package/discord-ytdl-core_
_Simple ytdl wrapper for discord bots with custom ffmpeg args support._

*youtube-ext* (v1.0.11)
_https://www.npmjs.com/package/youtube-ext_
_📼 Simple YouTube scraper and downloader. No key needed!_

*gtube* (v1.1.1)
_https://www.npmjs.com/package/gtube_
_youtube complete search and play library_

*ytdl-mp3* (v1.1.1)
_https://www.npmjs.com/package/ytdl-mp3_
_A command line tool for downloading YouTube videos, converting them to mp3 format, then automatically retrieving and applying ID3 tags and cover art._

*ytdl-run* (v0.2.1)
_https://www.npmjs.com/package/ytdl-run_
_youtube-dl runner in node.js_

*fbdl-core* (v1.0.2)
_https://www.npmjs.com/package/fbdl-core_
_Facebook video downloader._

*ytdl-core-discord* (v1.3.1)
_https://www.npmjs.com/package/ytdl-core-discord_
_A ytdl-core wrapper focused on efficiency for use in Discord music bots_

*play-dl* (v1.9.5)
_https://www.npmjs.com/package/play-dl_
_YouTube, SoundCloud, Spotify, Deezer searching and streaming for discord-js bots_

*discord-player* (v5.2.2)
_https://www.npmjs.com/package/discord-player_
_Complete framework to facilitate music commands using discord.js_

*discordjs-ytdl* (v2.2.0)
_https://www.npmjs.com/package/discordjs-ytdl_
_Great module for youtube video downloader for Discord Bots_

*youtube-mp3-converter* (v1.0.3)
_https://www.npmjs.com/package/youtube-mp3-converter_
_A simple node module to download youtube videos and convert them to mp3s. A simple wrapper around the ytdl and ffmped library, which provides a nice and easy to use api to convert youtube links into mp3s._

*yt-toolkit* (v1.3.6)
_https://www.npmjs.com/package/yt-toolkit_
_Y-TK is a module that helps to use youtube tools._

*youtube-sr* (v4.1.17)
_https://www.npmjs.com/package/youtube-sr_
_Simple package to make YouTube search._

*ytdl-splitter* (v1.1.0)
_https://www.npmjs.com/package/ytdl-splitter_
_Utility to download youtube videos as separate audio files, using the tracklist provided on the description of the video or CUE files_

*ytdl-web* (v1.0.1)
_https://www.npmjs.com/package/ytdl-web_
_ytdl-web is a light-weight webservice that provides ytdl.getInfo() over http_`

await conn.sendMessage(from, { text: settingme }, { quoted: mek })
await conn.sendMessage(from, { react: { text: "❓", key: np.key } });
reply('*Error !!*' + e )
}catch (e) {
console.log(e)
}
})

