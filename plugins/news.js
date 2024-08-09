const vajiraapi = "https://vajira-api-site-65bfe70906e4.herokuapp.com/details/hirunews";
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
    pattern: "hiru",
    desc: "...",
    category: "news",
    use: '.hiru',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let datax = `${vajiraapi}api/hirunews`;
    let x = await fetchJson(datax);
    let desc = `*┠─❲ 👮 DARK-YASH SPORT NEWS ❳*

*┃ ⛬*  *➾  𝕋𝕀𝕋𝕃𝔼 :*
 *${x.data.title}*

*┃ ⛬*  *➾  𝔻𝔼𝕊ℂℝ𝕀ℙ𝕋𝕀𝕆ℕ :*
${x.data.description}

> ◉ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ
`;
    return await conn.sendMessage(from, { image: { url: x.data.image }, caption: desc }, { quoted: mek });
});
