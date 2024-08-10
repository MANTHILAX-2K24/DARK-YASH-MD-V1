const prabathapi = "https://prabath-md-api.up.railway.app/" 

const config = require('../config')
const l = console.log
const { cmd, commands } = require('../command')

const dl = require('@bochilteam/scraper')  
const ytdl = require('youtubedl-core');
const api = require("caliph-api");
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
function ytreg(url) {
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    return ytIdRegex.test(url);
}
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, getsize} = require('../lib/functions')
const dl2 = require('inrl-dl')
var descv =''
if(config.LANG === 'SI') descv = "Youtube වෙතින් videos බාගත කරයි."
else descv = "Download videos from Youtube."

var descs =''
if(config.LANG === 'SI') descs = "Youtube වෙතින් songs බාගත කරයි."
else descs = "Download songs from Youtube."

var descyt =''
if(config.LANG === 'SI') descyt = "Youtube වෙතින් video සහ songs බාගත කරයි."
else descyt = "Download videos and songs from Youtube."

var descsh =''
if(config.LANG === 'SI') descsh = "Youtube search බාගත කරයි."
else descsh = "Search and get details from youtube."

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*කරුණාකර Youtube url එකක් ලබා දෙන්න*"
else urlneed = "*Please give me youtube url..*"

var imgmsg =''
if(config.LANG === 'SI') imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```"
else imgmsg = "```Please write a few words!```"

var sizetoo =''
if(config.LANG === 'SI') sizetoo = "_This file size is too big_\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*"
else sizetoo =  "_This file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*"

cmd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts lelena',
    react: "🔎",
    desc: descsh,
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
try {
let yts = require("yt-search")
var arama = await yts(q);
} catch(e) {
    l(e)
return await conn.sendMessage(from , { text: '*Error !!*' }, { quoted: mek } )
}
var mesaj =`*🔍 DARK-YASH-MD YT SEARCH*\n▰▰▰▰▰▰▰▰▰▰▬▰▰▰▰▰▰\n\n`;
arama.all.map((video) => {
mesaj +='*🎦 ' +  video.title + '*\n🔗 ' + video.url + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj }, { quoted: mek } )
} catch (e) {
    l(e)
  reply('*Error !!*')
}
})



cmd({
    pattern: "yt",
    alias: ["play"],
    use: '.yt lelena',
    desc: descyt,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `*╭───[🍭DARK-YASH-MD🍭]───╮*

     *🎶  SELECT TYPE  🎶*`
const buttons = [
  {buttonId: prefix + 'selectaud ' + q, buttonText: {displayText: '*Song File 🎶*'}, type: 1},
  {buttonId: prefix + 'selectvid ' + q, buttonText: {displayText: '*Video File 📽*'}, type: 1}
]
const buttonMessage = {
    caption: dat,
    footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 1
}
return await conn.buttonMessage(from, buttonMessage, mek)}
if(ytreg(q)){let dat = `*╭──[🍭DARK-YASH-MD🍭]──╮*

      *🎶 SELECT SONG TYPE 🎶*`
const buttons = [
{buttonId: prefix + 'ytdoc ' + q, buttonText: {displayText: 'Audio File 🎶'}, type: 1},
{buttonId: prefix + 'ytmp3 ' + q, buttonText: {displayText: 'Document File 📁'}, type: 1}
]
const buttonMessage = {
 caption: dat,
 footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
 buttons: buttons,
 headerType: 1
}
return await conn.buttonMessage(from, buttonMessage, mek)}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `╭┈┈┈[🧛‍♂️DARK-YASH-MD🧛‍♂️]┈┈┈╮

          🎥 YT DOWNLOADER🎥

┌────────────────────┐
┝ *ℹ \`Title : \`* ${anu.title}
┝ *👤 \`Author : \`* ${anu.author.name}
┝ *👁️‍🗨️ \`Views : \`* ${anu.viwes}
┝ *📌 \`Ago : \`* ${anu.ago}
┝ *🕘 \`Duration : \`* ${anu.timestamp}
┝ *🔗 \`Url :\`* ${anu.url}
└────────────────────┘

🔢 select the audio or video type bellow...

╭───────────⦁⦁➤`
const buttons = [
  {buttonId: prefix + 'selectaud ' + anu.url, buttonText: {displayText: '*Song FILE 🎶*'}, type: 1},
  {buttonId: prefix + 'selectvid ' + anu.url, buttonText: {displayText: '*Video File 🎥*'}, type: 1}
]
const buttonMessage = {
    image: {url: anu.thumbnail},
    caption: cap,
    footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 2
}
await conn.buttonMessage(from, buttonMessage)
} catch (e) {
  reply(N_FOUND)
  l(e)
}
})

cmd({
    pattern: "video",
    alias: ["ytvideo"],
    use: '.video lelena',
    react: "📽️",
    desc: descv,
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `*╭────[🍭DARK-YASH-MD🍭]────╮*

     *🎥 SELECT VIDEO QUALITY 🎥*
     
     *🔢 Select the Video quality from below*`
const buttons = [
  {buttonId: prefix + '240p ' + q, buttonText: {displayText: '*240p VIDEO*'}, type: 1},
  {buttonId: prefix + '360p ' + q, buttonText: {displayText: '*360p VIDEO*'}, type: 1},
  {buttonId: prefix + '480p ' + q, buttonText: {displayText: '*480p VIDEO*'}, type: 1},
  {buttonId: prefix + '720p ' + q, buttonText: {displayText: '*720p VIDEO*'}, type: 1}, 
  {buttonId: prefix + '1080p ' + q, buttonText: {displayText: '*1080p VIDEO*'}, type: 1}
]
const buttonMessage = {
    caption: dat,
    footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 1
}
return await conn.buttonMessage(from, buttonMessage, mek)}
if(ytreg(q)){let dat = `*╭───[🍭DARK-YASH-MD🍭]───╮*

       *🎥 SELECTE VIDEO TYPE 🎥*`
const buttons = [
{buttonId: prefix + '240p ' + q, buttonText: {displayText: '*240p Video*'}, type: 1},
{buttonId: prefix + '360p ' + q, buttonText: {displayText: '*360p Video*'}, type: 1},
{buttonId: prefix + '480p ' + q, buttonText: {displayText: '*480p VIDEO*'}, type: 1},
{buttonId: prefix + '720p ' + q, buttonText: {displayText: '*720p VIDEO*'}, type: 1},
{buttonId: prefix + '1080p ' + q, buttonText: {displayText: '*1080p VIDEO*'}, type: 1}
]
const buttonMessage = {
 caption: dat,
 footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
 buttons: buttons,
 headerType: 1
}
return await conn.buttonMessage(from, buttonMessage, mek)}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `*╭──[🍭DARK-YASH-MD🍭]──╮*

      *🎥 VIDEO DOWNLOADER 🎥*
   
┌────────────────────
┝ *ℹ \`Title :\`* ${anu.title}
┝ *👤 \`Author :\`* ${anu.author.name}
┝ *📺 \`Views :\`* ${anu.views}
┝ *📌 \`Ago :\`* ${anu.ago}
┝ *🕘 \`Duration :\`* ${anu.timestamp}
┝ *🔗 \`Url :\`* ${anu.url}
└─────────────────────

🔢 Select the Video quality from below\n`
const buttons = [
  {buttonId: prefix + '240p ' + anu.url, buttonText: {displayText: '*240p VIDEO*'}, type: 1},
  {buttonId: prefix + '360p ' + anu.url, buttonText: {displayText: '*360p VIDEO*'}, type: 1},
  {buttonId: prefix + '480p ' + anu.url, buttonText: {displayText: '*480p VIDEO*'}, type: 1}, 
  {buttonId: prefix + '720p ' + anu.url, buttonText: {displayText: '*720p VIDEO*'}, type: 1},
  {buttonId: prefix + '1080p ' + anu.url, buttonText: {displayText: '*1080p VIDEO*'}, type: 1}
]
const buttonMessage = {
    image: {url: anu.thumbnail},
    caption: cap,
    footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 2
}
await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
  reply(N_FOUND)
  l(e)
}
})

cmd({
    pattern: "song",
    alias: ["ytsong"],
    use: '.song lelena',
    react: "🎶",
    desc: descs,
    category: "download",
    filename: __filename
},

async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return await  reply(imgmsg)
if(isUrl(q) && !ytreg(q)) return await reply(imgmsg)
if(isUrl(q) && q.includes('/shorts')){let dat = `*╭───[🍭DARK-YASH-MD🍭]───╮*

     *🎶  SELECT SONG TYPE  🎶*`
const buttons = [
{buttonId: prefix + 'ytdoc ' + q, buttonText: {displayText: '*Audio File 🎶*'}, type: 1},
{buttonId: prefix + 'ytmp3 ' + q, buttonText: {displayText: '*Document File 📁*'}, type: 1}
]
const buttonMessage = {
    caption: dat,
    footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 1
}
return await conn.buttonMessage(from, buttonMessage, mek)}
if(ytreg(q)){let dat = `*╭───[🍭DARK-YASH-MD🍭]───╮*

     *🎶SELECT SONG TYPE🎶*`
const buttons = [
{buttonId: prefix + 'ytdoc ' + q, buttonText: {displayText: 'Audio File 🎶'}, type: 1},
{buttonId: prefix + 'ytmp3 ' + q, buttonText: {displayText: 'Document File 📁'}, type: 1}
]
const buttonMessage = {
 caption: dat,
 footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
 buttons: buttons,
 headerType: 1
}
return await conn.buttonMessage(from, buttonMessage, mek)}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `*╭───[🍭DARK-YASH-MD🍭]───╮*

       *🎶 SONG DOWNLOADER 🎶*
   
┌───────────────────
┝ *ℹ️ \`Title :\`* ${anu.title}
┝ *👤 \`Author :\`* ${anu.author.name}
┝ *📺 \`Views :\`* ${anu.views}
┝ *📌 \`Ago :\`* ${anu.ago}
┝ *🕘 \`Duration :\`* ${anu.timestamp}
┝ *🔗 \`Url :\`* ${anu.url}
└────────────────────

🔢 Select the audio type from below.\n`
const buttons = [
  {buttonId: prefix + 'ytdoc ' + anu.url, buttonText: {displayText: '*Audio File 🎶*'}, type: 1},
  {buttonId: prefix + 'ytmp3 ' + anu.url, buttonText: {displayText: '*Document File 📁*'}, type: 1}
]
const buttonMessage = {
    image: {url: anu.thumbnail},
    caption: cap,
    footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 2
}
await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
  reply(N_FOUND)
  l(e)
}
})

cmd({
  alias: ["selectaud"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `*╭───[🍭DARK-YASH-MD🍭]───╮*

     *🎶  SELECT SONG TYPE  🎶*`
const buttons = [
  {buttonId: prefix + 'ytdoc ' + q, buttonText: {displayText: '*Audio File 🎶*'}, type: 1},
  {buttonId: prefix + 'ytmp3 ' + q, buttonText: {displayText: '*Document File 📂*'}, type: 1}
]
  const buttonMessage = {
      caption: dat,
      footer: "⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
      buttons: buttons,
      headerType: 1
  }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
  alias: ["selectvid"],
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, prefix, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dat = `*╭───[🍭DARK-YASH-MD🍭]───╮*

      *🎥 SELECT VIDEO QUALITY 🎥*`
const buttons = [
  {buttonId: prefix + '240p ' + q, buttonText: {displayText: '*240p VIDEO*'}, type: 1},
  {buttonId: prefix + '360p ' + q, buttonText: {displayText: '*360p VIDEO*'}, type: 1},
  {buttonId: prefix + '480p ' + q, buttonText: {displayText: '*480p VIDEO*'}, type: 1},
  {buttonId: prefix + '720p ' + q, buttonText: {displayText: '*720p VIDEO*'}, type: 1},
  {buttonId: prefix + '1080p ' + q, buttonText: {displayText: '*1080p VIDEO*'}, type: 1}
]
  const buttonMessage = {
      caption: dat,
      footer:"⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
      buttons: buttons,
      headerType: 1
  }
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
reply(N_FOUND)
l(e)
}
})


//===================================================================================================

cmd({
  pattern: "240p",
  use: '.240p <video url>',
  react: "⬇️",
  desc: "Download yt videos.",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['240p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['240p'].download() },caption:"⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁\n\n*240p*"}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
  pattern: "360p",
  use: '.360p <video url>',
  react: "⬇️",
  desc: "Download yt videos.",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['360p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['360p'].download() },caption:"⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁\n\n*360p*"}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
  pattern: "480p",
  use: '.480p <video url>',
  react: "⬇️",
  desc: "Download yt videos.",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['480p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['480p'].download() },caption:"⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁\n\n*480p*"}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
    pattern: "720p",
    use: '.720p <video url>',
    react: "⬇️",
    desc: "Download yt videos.",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['720p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['720p'].download() },caption:"⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁\n\n*720p*"}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
  pattern: "1080p",
  use: '.1080p <video url>',
  react: "⬇️",
  desc: "Download yt videos.",
  category: "download",
  filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
const yt2 = await  dl.youtubedl(q)
let yt = yt2
let size = await getsize(await yt.video['1080p'].download())
if (size.includes('MB') && size.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
if (size.includes('GB')) return await conn.sendMessage(from, { text: sizetoo }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['1080p'].download() },caption:"⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁\n\n*1080p*"}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})
} catch (e) {
reply(N_FOUND)
l(e)
}
})


cmd({
  pattern: "ytdoc",
  use: '.ytdoc <yt url>',
  react: "⬇️",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)

 const site = `${prabathapi}api/ytmp3?url=${q}`  
 const data = await fetchJson(site)

if (data.data.file_size.replace(' MB','') <= config.MAX_SIZE) {
let sendaE =  await conn.sendMessage(from, { audio: {url:data.data.download}, mimetype: 'audio/mpeg', fileName:  `${data.data.title}.mp3` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})    
return await conn.sendMessage(from, { react: { text: '🎼', key: sendaE.key }})

} else {
reply(sizetoo)
}
    
    /*let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
let sendaE =  await conn.sendMessage(from, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName:  `${titleYt}.mp3` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🎼', key: sendaE.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(sizetoo)
}
fs.unlinkSync(`./${randomName}`);*/
} catch (e) {
reply(N_FOUND)
l(e)
}
})

cmd({
  pattern: "ytmp3",
  use: '.ytmp3 <yt url>',
  react: "⬇️",
  desc: "Download yt song.",
  category: "download",
  filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!ytreg(q)) return await  reply(urlneed)
 
const site = `${prabathapi}api/ytmp3?url=${q}`  
const data = await fetchJson(site)

if (data.data.file_size.replace(' MB','') <= config.MAX_SIZE) {
let sendaE =  await conn.sendMessage(from, { document: {url:data.data.download}, mimetype: 'audio/mpeg', fileName:  `${data.data.title}.mp3`,caption: "⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁" }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})    
return await conn.sendMessage(from, { react: { text: '🎼', key: sendaE.key }})

} else {
reply(sizetoo)
}   
/*let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
  reply(sizetoo);
  return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
  })
  .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
  stream.on("error", reject);
  stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
  let senda =  await conn.sendMessage(from, { document: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName: titleYt + '.mp3',caption: config.FOOTER  }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(sizetoo);
}
fs.unlinkSync(`./${randomName}`);*/
} catch (e) {
reply(N_FOUND)
l(e)
}
})
