const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');

var tmsg =''
if(config.LANG === 'SI') tmsg = 'එය Bot link ලබා දෙයි.'
else tmsg = "It gives bot link."


cmd({
    pattern: "script",
    alias: ["sc","git"],
    react: '📚',
    desc: tmsg,
    category: "main",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const result = '*🎉  DARK-YASH-MD_OFFICAL 🔥*\n\n🔮 THE MAIN HOPE OF CREATING THIS BOT IS TO TAKE FULL ADVANTAGE OF THE WHATSAPP  APP AND MAKE ITS WORK EASIER...\n\n💡 VARIOUS THINGS CAN BE DOWNLODED FROM THIS BOT. ALSO, MANAGING GROUPS, MAKING LOGOS AND IMAGES IN DIFFERNT WAYS, SEACHING FOR DIFFERNT THINGS AND GETTING INFORMATION AND MORE FUTURE INCLUDED...\n\n*⚠️ ALSO, IF YOU WHATSAPP ACCOUNT GETS DAMAGED OR BANNED BY USING THIS, WE ARE NOT RESPONSIBLE AND YOU SHOULD TAKE RESPONSIBILITY FOR IT...*\n\n*⦁────────────────────────⦁*\n\n🪀 *YOU CAN CREATE THE BOT AND SEE THE DEPLOY METHODS FROM THE WEBSITE BELLOW...*👇\n\n🌏 *WEBSITE -:* https://dark-yash-md-offical.vercel.app/\n\n👨‍💻 *OWNER -:* M.G.Manthila\n\n🎡 *GITHHB -:*  https://github.com/Darkyash/DARK-YASH-MD*\n\n*🔥 THANKS FOR USING DARK-YASH-MD...*'
reply(result)
} catch (e) {
l(e)
}
})


cmd({
    pattern: "math",
    alias: ["sc","git"],
    desc: tmsg,
    category: "mathtool",
    use: '.math',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const result = '\n\nResult :*\n\n\n**\n\n\n\n*Steps :*'
reply(result)
} catch (e) {
l(e)
}
})

cmd({
    pattern: "mathstep",
    alias: ["sc","git"],
    desc: tmsg,
    category: "mathtool",
    use: '.mathstep',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const result = '\n\nResult :*\n\n\n**\n\n\n'
reply(result)
} catch (e) {
l(e)
}
})



