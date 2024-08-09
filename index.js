const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchBuffer, getFile } = require('./lib/functions')
const { sms, downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const path = require('path')
const msgRetryCounterCache = new NodeCache()
const prefix = '.'
const ownerNumber = ['94743218422']
const owanerreact = '🎀'
var { updateCMDStore, isbtnID, getCMDStore, getCmdForCmdId, connectdb, input, get, updb, updfb } = require("./lib/database")

//===================SESSION============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace("ZEROTWO=", "")
    const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
    filer.download((err, data) => {
      if (err) throw err
      fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
        console.log("Session Download Completed ✔️")
      })
    })
  }
}
// <<==========PORTS===========>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//====================================
async function connectToWA() {
  const { version, isLatest } = await fetchLatestBaileysVersion()
  console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
const conn = makeWASocket({
logger: P({ level: 'silent' }),
printQRInTerminal: true,
generateHighQualityLinkPreview: true,
auth: state,
patchMessageBeforeSendings: (message2) => {
const requiresPatch = !!(
message2.buttonsMessages
|| message2.templateMessages
|| message2.listMessages
);
if (requiresPatch) {
message2 = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message2,
},
},
};
}
return message2;
}  
})
  conn.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA()
      }
    } else if (connection === 'open') {

       console.log(' Plugins installed ✅ ')
      const path = require('path');
      fs.readdirSync("./plugins/").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
      });
      console.log(' 🧬 VERSION: 1.0.0 ')
      await connectdb()
      await updb()
      console.log(' Dark-Yash-Md Connected ✅')
      //start message
      conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image:{url:"https://telegra.ph/file/c9512a07875cc87a246e3.jpg"},caption:"*⚡ DARK-YASH-MD IS ACTIVE...*\n\n🔮 THE MAIN HOPE OF CREATING THIS BOT IS TO TAKE FULL ADVANTAGE OF THE WHATSAPP  APP AND MAKE ITS WORK EASIER...\n\n💡 VARIOUS THINGS CAN BE DOWNLODED FROM THIS BOT. ALSO, MANAGING GROUPS, MAKING LOGOS AND IMAGES IN DIFFERNT WAYS, SEACHING FOR DIFFERNT THINGS AND GETTING INFORMATION AND MORE FUTURE INCLUDED...\n\n*⚠️ ALSO, IF YOU WHATSAPP ACCOUNT GETS DAMAGED OR BANNED BY USING THIS, WE ARE NOT RESPONSIBLE AND YOU SHOULD TAKE RESPONSIBILITY FOR IT...*\n\n*⦁───────────────────────⦁*" })
      
     
    }
  })

  conn.ev.on('creds.update', saveCreds)
  conn.ev.on('messages.upsert', async (mek) => {
    try {
      mek = mek.messages[0]
      if (!mek.message) return
      mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
      if (mek.key && mek.key.remoteJid === 'status@broadcast') return
      const m = sms(conn, mek)
      const type = getContentType(mek.message)
      const content = JSON.stringify(mek.message)
      const from = mek.key.remoteJid
      const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
      const body = (type === 'conversation') ? mek.message.conversation : mek.message?.extendedTextMessage?.contextInfo?.hasOwnProperty('quotedMessage') &&
        await isbtnID(mek.message?.extendedTextMessage?.contextInfo?.stanzaId) &&
        getCmdForCmdId(await getCMDStore(mek.message?.extendedTextMessage?.contextInfo?.stanzaId), mek?.message?.extendedTextMessage?.text)
        ? getCmdForCmdId(await getCMDStore(mek.message?.extendedTextMessage?.contextInfo?.stanzaId), mek?.message?.extendedTextMessage?.text) : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
      const isCmd = body.startsWith(prefix)
      const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
      const args = body.trim().split(/ +/).slice(1)
      const q = args.join(' ')
      const isGroup = from.endsWith('@g.us')
      const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
      const senderNumber = sender.split('@')[0]
      const botNumber = conn.user.id.split(':')[0]
      const pushname = mek.pushName || 'Sin Nombre'
      const developers = '94760863952'
      const isbot = botNumber.includes(senderNumber)
      const isdev = developers.includes(senderNumber)
      const isMe = isbot ? isbot : isdev
      const isOwner = ownerNumber.includes(senderNumber) || isMe
      const botNumber2 = await jidNormalizedUser(conn.user.id);
      const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => { }) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const participants = isGroup ? await groupMetadata.participants : ''
      const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
      const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
      const isAdmins = isGroup ? groupAdmins.includes(sender) : false
      const isAnti = (teks) => {
        let getdata = teks
        for (let i = 0; i < getdata.length; i++) {
          if (getdata[i] === from) return true
        }
        return false
      }

      const reply = async (teks) => {
        return await conn.sendMessage(from, { text: teks }, { quoted: mek })
      }

      
      const NON_BUTTON = true // Implement a switch to on/off this feature...
      conn.buttonMessage = async (jid, msgData, quotemek) => {
        if (!NON_BUTTON) {
          await conn.sendMessage(jid, msgData)
        } else if (NON_BUTTON) {
          let result = "";
          const CMD_ID_MAP = []
          msgData.buttons.forEach((button, bttnIndex) => {
            const mainNumber = `${bttnIndex + 1}`;
            result +=`\n | ${mainNumber} ${button.buttonText.displayText}`;

            CMD_ID_MAP.push({ cmdId: mainNumber, cmd: button.buttonId });
          });

          if (msgData.headerType === 1) {
            const buttonMessage = `${msgData.text || msgData.caption}\n${result}\n╰────────────⦁⦁➤\n\n${msgData.footer}`
            const textmsg = await conn.sendMessage(from, { text: buttonMessage }, { quoted: quotemek || mek })
            await updateCMDStore(textmsg.key.id, CMD_ID_MAP);
          } else if (msgData.headerType === 4) {
            const buttonMessage = `${msgData.caption}\n${result}${msgData.footer}`
            const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage }, { quoted: quotemek || mek })
            await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
          } else if (msgData.headerType === 2) {
            const buttonMessage = `${msgData.caption}${result}\n╰───────────⦁⦁➤\n\n${msgData.footer}`
            const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage }, { quoted: quotemek || mek })
            await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
          } else if (msgData.headerType === 3) {
            const buttonMessage = `${msgData.caption}${result}\n*╰──────────────────⦁⦁➤*\n\n${msgData.footer}`
            const imgmsg = await conn.sendMessage(jid, { image: msgData.image, caption: buttonMessage }, { quoted: quotemek || mek })
            await updateCMDStore(imgmsg.key.id, CMD_ID_MAP);
          }
        }
      }

      conn.listMessage = async (jid, msgData, quotemek) => {
        if (!NON_BUTTON) {
          await conn.sendMessage(jid, msgData)
        } else if (NON_BUTTON) {
          let result = "";
          const CMD_ID_MAP = []

          msgData.sections.forEach((section, sectionIndex) => {
            const mainNumber = `${sectionIndex + 1}`;
            result += `\n ║   *[${mainNumber}] ${section.title}*\n`;

            section.rows.forEach((row, rowIndex) => {
              const subNumber = `${mainNumber}.${rowIndex + 1}`;
              const rowHeader = ` ║  ┃${subNumber} | ${row.title}`;
              result += `${rowHeader}\n`;
              if (row.description) {
                result += `   ${row.description}\n`;
              }
              CMD_ID_MAP.push({ cmdId: subNumber, cmd: row.rowId });
            });
          });
          const listMessage = `${msgData.text}\n\n ╔═══════════════⦁⦁➤${msgData.buttonText}${result} ╚═══════════════⦁⦁➤\n\n${msgData.footer}`
          const text = await conn.sendMessage(from, { text: listMessage }, { quoted: quotemek || mek })
          await updateCMDStore(text.key.id, CMD_ID_MAP);
        }
      }
        

      conn.edit = async (mek, newmg) => {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: mek.key,
            type: 14,
            editedMessage: {
              conversation: newmg
            }
          }
        }, {})
      }
      conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        let mime = '';
        let res = await axios.head(url)
        mime = res.headers['content-type']
        if (mime.split("/")[1] === "gif") {
          return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
        }
        let type = mime.split("/")[0] + "Message"
        if (mime === "application/pdf") {
          return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
        }
        if (mime.split("/")[0] === "image") {
          return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
        }
        if (mime.split("/")[0] === "video") {
          return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
        }
        if (mime.split("/")[0] === "audio") {
          return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
        }
      }
      //============================================================================ 

      if (config.ONLY_GROUP && !isMe && !isGroup) return
      if (from === "120363043598019970@g.us" && !isdev) return
      //==================================plugin map================================
      const events = require('./command')
      const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
      if (isCmd) {
        const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
        if (cmd) {
          if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key } })

          try {
            cmd.function(conn, mek, m, { from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply });
          } catch (e) {
            console.error("[PLUGIN ERROR] ", e);
          }
        }
      }
      events.commands.map(async (command) => {
        if (body && command.on === "body") {
          command.function(conn, mek, m, { from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
        } else if (mek.q && command.on === "text") {
          command.function(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
        } else if (
          (command.on === "image" || command.on === "photo") &&
          mek.type === "imageMessage"
        ) {
          command.function(conn, mek, m, { from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
        } else if (
          command.on === "sticker" &&
          mek.type === "stickerMessage"
        ) {
          command.function(conn, mek, m, { from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply })
        }
      });

      //============================================================================
      if (isAnti(config.ANTI_LINK) && isBotAdmins) {
        if (!isAdmins) {
          if (!isMe) {
            if (body.match(`chat.whatsapp.com`)) {
              await conn.sendMessage(from, { delete: mek.key })
            }
          }
        }
      }
      //============================================================================
      var bad = await fetchJson("https://github.com/vihangayt0/server-/raw/main/xeonsl_bad.json")
      if (isAnti(config.ANTI_BAD) && isBotAdmins) {
        if (!isAdmins) {
          for (any in bad) {
            if (body.toLowerCase().includes(bad[any])) {
              if (!body.includes('tent')) {
                if (!body.includes('docu')) {
                  if (!body.includes('http')) {
                    if (groupAdmins.includes(sender)) return
                    if (mek.key.fromMe) return
                    await conn.sendMessage(from, { delete: mek.key })
                    await conn.sendMessage(from, { text: '*Bad word detected !*' })
                    await conn.groupParticipantsUpdate(from, [sender], 'remove')
                  }
                }
              }
            }
          }
        }
      }
      //====================================================================
      var check_id = ((id) => {
        var data = {
          is_bot: false,
          device: id.length > 21 ? 'android' : id.substring(0, 2) === '3A' ? 'ios' : 'web'
        }
        if (id.startsWith('BAE5')) {
          data.is_bot = true
          data.bot_name = 'bailyes'
        }
        if (/amdi|queen|black|amda|achiya|achintha/gi.test(id)) {
          data.is_bot = true
          data.bot_name = 'amdi'
        }
        return data
      })
      async function antibot(Void, citel) {
        if (isAnti(config.ANTI_BOT)) return
        if (isAdmins) return
        if (!isBotAdmins) return
        if (isOwner) return
        if (isGroup) {
          var user = check_id(mek.key.id)
          if (user.is_bot) {
            try {
              await conn.sendMessage(from, { text: `*Other bots are not allowed here !!*` });
              return await conn.groupParticipantsUpdate(from, [sender], 'remove')
            } catch { }
          }
        }
      }
      try {
        await antibot(conn, mek)
      } catch { }
      switch (command) {
        case 'jid':
          reply(from)
          break
        case 'device': {
          let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)

          reply("*He Is Using* _*Whatsapp " + deviceq + " version*_")
        }
          break
        default:
      }
    } catch (e) {
      const isError = String(e)
      console.log(isError)
    }
  })
}
app.get("/", (req, res) => {
  res.send("📟 Astro Working successfully!");
});
app.listen(port, () => console.log(`🗂️ Dark-Yash-Md Server listening on port http://localhost:${port}`));
setTimeout(async () => {
  await connectToWA()
}, 1000);
