const { cmd, commands } = require('../command');
const config = require('../config')
cmd({
    pattern: "downmenu",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭───[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ DOWNLOAD MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/6d6e80b12c74e10c531fc.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})

cmd({
    pattern: "searchmenu",
    react: "🕵🏻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ SEARCH MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/e0ed3f3d554b14b1f9b69.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})

cmd({
    pattern: "groupmenu",
    react: "🕵🏻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ GROUP MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
  if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/7e17792cdf6ec36f74537.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})


cmd({
    pattern: "convertmenu",
    react: "🔄",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ CONVERT MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/7e4f80ebc9d10c7eec825.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})

cmd({
    pattern: "mathsmenu",
    react: "👾",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ MATHS MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'mathtool'){
if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/205dca768cf479049a09e.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})
cmd({
  pattern: "ownermenu",
  react: "💼",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ OWNER MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/f5e857030e0cac0a8a707.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})

cmd({
  pattern: "adminmenu",
  react: "🛡️",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ ADMIN MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'admin'){
if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};

await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/e7f7636c6a34d590f694a.jpg"}, caption: menuc + "╰───────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})
cmd({
  pattern: "mainmenu",
  react: "🎡",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menuc = `*╭──[🍭DARK-YASH-MD🍭]───╮*

╭──────────────⦁⦁➤
 | *🧙‍♂️ MAIN MENU*
 |   ───────────\n`
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
if(!commands[i].dontAddCommandList){
menuc += ` | ◦➛. ${commands[i].pattern}\n`
}}};


await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/a39d8ef08280cfc705699.jpg"}, caption: menuc + "╰─────────────────⦁⦁➤"}, { quoted: mek })
} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})
