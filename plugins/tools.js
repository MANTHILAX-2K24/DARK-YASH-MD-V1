const prabathapi = "https://prabath-md-api.up.railway.app/";
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "trt",
    alias: ['translate'],
    category: "convert",
    filename: __filename,
    desc: "Translate's given text in desired language."
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    if (!m.quoted) return reply("Please give me text");

    const { translate } = require('@vitalets/google-translate-api');
    let lang = `${q}` || await reply(`❌ *Please provide language to translate.*`);
    let text;

    if (m.quoted.conversation) {
        text = m.quoted.conversation;
    } else if (m.quoted.imageMessage && m.quoted.imageMessage.caption) {
        text = m.quoted.imageMessage.caption;
    } else if (m.quoted.videoMessage && m.quoted.videoMessage.caption) {
        text = m.quoted.videoMessage.caption;
    } else {
        return await reply(`❌ *Please provide text to translate.*`);
    }

    translate(text, { to: lang })
        .then(response => {
            reply(`*Translated into ${lang}:*\n\n${response.text}`);
        })
        .catch(error => {
            reply(error);
        });
});

cmd({
    pattern: "cal",
    desc: "...",
    category: "mathtool",
    use: '.cal',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("please give me number \n\n .cal 12+37");
        const math = require('mathjs');
        const result = math.evaluate(q);
        reply(`${q} = *${result}*`);
    } catch (e) {
        console.log(e);
    }
});

cmd({
    pattern: "deranaaa",
    desc: "...",
    category: "news",
    use: '.derana',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let datax = `${prabathapi}api/derananews`;
    let x = await fetchJson(datax);
    let desc = `*┠─❲ 👨‍🚒 DARK-YASH DERANA NEWS ❳*

*┃⦁*  *➟ ᴛɪᴛʟᴇ  :*
 *${x.data.title}*

*┃⦁*  *➟ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :*
  ${x.data.desc}

> ◉ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ
`;
    return await conn.sendMessage(from, { image: { url: x.data.image }, caption: desc }, { quoted: mek });
});

cmd({
    pattern: "esanaaa",
    desc: "...",
    category: "news",
    use: '.esana',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let datax = `${prabathapi}api/esananews`;
    let x = await fetchJson(datax);
    let desc = `*┠─❲ 🧙‍♂️ DARK-YASH ESANA NEWS ❳*
    
*┃◉* *⇨ ᴛɪᴛʟᴇ :*
 *${x.data.title}*

*┃◉* *⇨ ᴅᴀᴛᴇ :*
 ${x.data.date}

*┃◉* *⇨ ᴜʀʟ :*
 ${x.data.url}

*┃◉* *⇨ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :*
 ${x.data.desc}

> ◉ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ
`;
    return await conn.sendMessage(from, { image: { url: x.data.image }, caption: desc }, { quoted: mek });
});

cmd({
    pattern: "sporttt",
    desc: "...",
    category: "searchh",
    use: '.sport',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let datax = `${prabathapi}api/sportynews`;
    let x = await fetchJson(datax);
    let desc = `*┠─❲ 👮 DARK-YASH SPORT NEWS ❳*

*┃ ⛬*  *➾  𝕋𝕀𝕋𝕃𝔼 :*
 *${x.data.title}*

*┃ ⛬*  *➾  𝔻𝔼𝕊ℂℝ𝕀ℙ𝕋𝕀𝕆ℕ :*
${x.data.description}

> Cricket News#Popular#Recent#Sinhala#Trending#Women's Cricket

> ◉ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ
`;
    return await conn.sendMessage(from, { image: { url: x.data.image }, caption: desc }, { quoted: mek });
});

cmd({
    pattern: "sporty",
    desc: "...",
    category: "search",
    use: '.sporty',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    let datax = `${prabathapi}api/sportynews`;
    let x = await fetchJson(datax);
    let desc = `*┠─❲ 👮 DARK-YASH SPORT NEWS ❳*

*┃ ⛬*  *➾  𝕋𝕀𝕋𝕃𝔼 :*
 *${x.data.title}*

*┃ ⛬*  *➾  𝔻𝔼𝕊ℂℝ𝕀ℙ𝕋𝕀𝕆ℕ :*
${x.data.description}

> Cricket News#Popular#Recent#Sinhala#Trending#Women's Cricket

> ◉ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ʏᴀꜱʜ-ᴍᴅ
`;
    return await conn.sendMessage(from, { image: { url: x.data.image }, caption: desc }, { quoted: mek });
});
