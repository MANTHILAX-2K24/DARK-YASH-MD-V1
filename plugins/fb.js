const prabathapi = "https://prabath-md-api.up.railway.app/";
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require("axios")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
async function fbDownloader(url) {
	try {
		const response1 = await axios({
			method: 'POST',
			url: 'https://snapsave.app/action.php?lang=vn',
			headers: {
				"accept": "*/*",
				"accept-language": "vi,en-US;q=0.9,en;q=0.8",
				"content-type": "multipart/form-data",
				"sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Microsoft Edge\";v=\"110\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"Windows\"",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"Referer": "https://snapsave.app/vn",
				"Referrer-Policy": "strict-origin-when-cross-origin"
			},
			data: {
				url
			}
		});

		let html;
		const evalCode = response1.data.replace('return decodeURIComponent', 'html = decodeURIComponent');
		eval(evalCode);
		html = html.split('innerHTML = "')[1].split('";\n')[0].replace(/\\"/g, '"');

		const $ = cheerio.load(html);
		const download = [];

		const tbody = $('table').find('tbody');
		const trs = tbody.find('tr');

		trs.each(function (i, elem) {
			const trElement = $(elem);
			const tds = trElement.children();
			const quality = $(tds[0]).text().trim();
			const url = $(tds[2]).children('a').attr('href');
			if (url != undefined) {
				download.push({
					quality,
					url
				});
			}
		});

		return {
			success: true,
			download
		};
	}
	catch (err) {
		return {
			success: false
		};
	}
}
function fbreg(url) {
const fbRegex = /(?:https?:\/\/)?(?:www\.)?(m\.facebook|facebook|fb)\.(com|me|watch)\/(?:(?:\w\.)*#!\/)?(?:groups\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/
return fbRegex.test(url);
}

var desc =''
if(config.LANG === 'SI') desc = "Facebook වෙතින් වීඩියෝ බාගත කරයි."
else desc = "Download videos from Facebook."

var N_FOUND =''
if(config.LANG === 'SI') N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
else N_FOUND = "*I couldn't find anything :(*"

var urlneed =''
if(config.LANG === 'SI') urlneed = "*කරුණාකර facebook video url එකක් ලබා දෙන්න*"
else urlneed = "*Please give me facebook video url..*"


cmd({
  pattern: "fb",
  alias: ["fbdl"],
  desc: desc,
  category: "download",
  use: '.fb <Fb video link>',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!fbreg(q)) return await  reply(urlneed)
let data = await fbDownloader(q)
let l = data.download
let dat = `*╭┈┈[ 👩‍🚒 DARK YASH MD 👩‍🚒 ]┈┈╮*

           *🧧FB DOWNLODER 🧧*

*⛬ ➜ When you put the FB Link here, you can answer the number here and get the way you want...*

*╭──────────────────⦁⦁➤*`
if(!l[0]) return await reply(N_FOUND)
var buttons
if(!l[1]){
var buttons = [
 {buttonId: prefix + 'dvideo ' + l[0].url, buttonText: {displayText: l[0].quality + ' VIDEO'}, type: 1},
 {buttonId: prefix + 'fbaud ' + q, buttonText: {displayText:'*🎶 AUDIO FILE*'}, type: 1},
 {buttonId: prefix + 'fbdoc ' + q, buttonText: {displayText:'*📂 DOCUMENT FILE*'}, type: 1}	
	
]
} else {
var buttons = [
  {buttonId: prefix + 'daudio ' + l[1].url, buttonText: {displayText:  '🪫 SD QUALITY'}, type: 1},
  {buttonId: prefix + 'daudio ' + l[0].url, buttonText: {displayText:  '🔋 HD QUALITY'}, type: 1},
  {buttonId: prefix + 'fbaud ' + q, buttonText: {displayText: '🎶 AUDIO FILE'}, type: 1},
  {buttonId: prefix + 'fbdoc ' + q, buttonText: {displayText:'📂 DOCUMENT FILE'}, type: 1}	
]
}
const buttonMessage = {
    image: {url: "https://telegra.ph/file/ed7fc0dd4bc7381bff641.jpg"},
    caption: dat,
    footer:"⦁ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",
    buttons: buttons,
    headerType: 3
}
let fb = await conn.buttonMessage(from, buttonMessage,mek)
return await conn.sendMessage(from, { react: { text: "✅", key: fb.key }});
} catch (e) {
l(e)
await reply(N_FOUND)
}
})

cmd({
  pattern: "fbaud",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data =await fetchJson(`${prabathapi}api/fdown?url=${q}`)
	
let aud = await conn.sendMessage(from, { audio: { url: data.data.hd }, mimetype:"audio/mpeg",caption: "⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key } })	
return await conn.sendMessage(from, { react: { text: "🎵", key: aud.key }});
} catch (e) {
  reply('*ERROR*')
}})

cmd({
  pattern: "fbdoc",
  react: "⬇️",	
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data =await fetchJson(`${prabathapi}api/fdown?url=${q}`)

let doc = await conn.sendMessage(from, { document: { url: data.data.hd }, mimetype:"audio/mpeg",caption: "⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁",fileName:q}, { quoted: mek })
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
return await conn.sendMessage(from, { react: { text: "🎵", key: doc.key } });	
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})


cmd({
  pattern: "daudio",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let video = await conn.sendMessage(from, { video: { url: q }, caption: "⦁ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ ⦁"}, { quoted: mek })
await conn.sendMessage(from, { react: { text: "✔️", key: mek.key } })	
return await conn.sendMessage(from, { react: { text: "🎥", key: video.key }});
} catch (e) {
  reply('*ERROR !!*')
l(e)
}
})
