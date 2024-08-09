const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
  
cmd({
    pattern: "mute",
    react: "🔇",
    alias: ["close", "mute_tita"],
    desc: "Change to group settings to only admins can send messages.",
    category: "group",
    use: '.mute',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
await conn.groupSettingUpdate(from, 'announcement')
 let mute =await conn.sendMessage(from , { text: `*🔇 Group Chat closed by Admin* ✔️` }, { quoted: mek } )
 return await conn.sendMessage(from, { react: { text: '🔇', key: mute.key }})   
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
    pattern: "unmute",
    react: "🔊",
    alias: ["open","unmute_titan"],
    desc: "Change to group settings to all members can send messages.",
    category: "group",
    use: '.unmute',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
await conn.groupSettingUpdate(from, 'not_announcement')
let unmute = await conn.sendMessage(from , { text: `*🔊 Group Chat Opened by Admin* ✔️` }, { quoted: mek } )
return await conn.sendMessage(from, { react: { text: '🔊', key: unmute.key }})   
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
    pattern: "del",
    alias: [","],
    desc: "delete message",
    category: "group",
    use: '.del',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const key = {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
                await conn.sendMessage(m.chat, { delete: key })
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
            pattern: "promote",
            desc: 'promote the person',
            category: "group",
            filename: __filename,
            use: '<quote|reply>',
        },
              async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
                 try {    
                 if (!isGroup) { await reply(`only for groups`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: me.key }}) }
                 if (!isBotAdmins) { await reply(`*I can't do that. give group admin*`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: me.key }}) }

            if (isOwner || isSachintha || isSavi || isSadas || isMani || isMe) {
            let users;
                if (m.quoted === null) {
                if (!q) { await reply(`*Please give me a quoted user or number ❗*`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: me.key }}) }
                users = m.body.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                } else {
                users = m.quoted.sender;
                }

                const alreadyAdmin = groupAdmins?.includes(users)

                if (alreadyAdmin) { await reply("*Already, This user is an Admin*")
                return await conn.sendMessage(from, { react: { text: "❌", key: me.key }}) }

                await conn.groupParticipantsUpdate(m.chat, [users], "promote");
                let promote =  await reply(`@${users.replace(/[^0-9]/g, "")} *has been promoted...✔️*`);
                return await conn.sendMessage(from, { react: { text: "✔️", key: promote.key }})
                
                } else { 
                await reply('This Only For Admins')
                return await conn.sendMessage(from, { react: { text: "❌", key: me.key }}) }
} catch (e) {
        await reply(`*❌ Errored :-* ` + e);
return await conn.sendMessage(from, { react: { text: "❌", key: me.key }}) 
console.log(e)			
}
})

cmd({
            pattern: "demote",
            desc: 'demote the person',
            category: "group",
            filename: __filename,
            use: '<quote|reply>',
        },
              async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
                 try {    
                 if (!isGroup) { await reply(`only for groups`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }
                 if (!isBotAdmins) { await reply(`*I can't do that. give group admin*`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }

            if (isOwner || isSachintha || isSavi || isSadas || isMani || isMe) {
            let users;
                if (m.quoted === null) {
                if (!q) { await reply(`*Please give me a quoted user or number ❗*`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }
                users = m.body.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                } else {
                users = m.quoted.sender;
                }

                const alreadyAdmin = groupAdmins?.includes(users)

                if (alreadyAdmin) { await reply("*Already, This user is an Admin*")
                return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }

                await conn.groupParticipantsUpdate(m.chat, [users], "demote");
                await reply(`@${users.replace(/[^0-9]/g, "")} *has been demoted as an admin of the group!*`);
                await conn.sendMessage(from, { react: { text: "✅", key: mek.key }})
                
                } else { 
                await reply('This Only For Admins')
                return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }
} catch (e) {
        await reply(`*❌ Errored :-* ` + e);
return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) 
console.log(e)
}
})

cmd({
  pattern: "kick",
  react: "⛔",
  alias: [".."],
  desc: "Kicks replied/quoted user from group.",
  category: "group",
  filename: __filename,
  use: '<quote|reply|number>',
},           
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try {
       if (!m.isGroup) return reply(`only for groups`);
  if (!isBotAdmins) return reply(`I can't do that. give group admin`);


    const user = m.quoted.sender;
    if (!user) return reply(`*Please give me a user to kick ❗*`);
    await conn.groupParticipantsUpdate(m.chat, [user], "remove");
   reply(`${user} *has been kicked out of the group!*`);
  } catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
    pattern: "lockgs",
    react: "🔒",
    alias: ["lockgsettings"],
    desc: "Change to group settings to only admins can edit group info",
    category: "group",
    use: '.lockgs',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group Command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
await conn.groupSettingUpdate(from, 'locked')
 await conn.sendMessage(from , { text: `*Group settings Locked* 🔒` }, { quoted: mek } )
await conn.sendMessage(from, { react: { text: '🔒', key: mek.key }})
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

//allow everyone to modify the group's settings -- like display picture etc.
//await sock.groupSettingUpdate("abcd-xyz@g.us", 'unlocked')

cmd({
    pattern: "unlockgs",
    react: "🔓",
    alias: ["unlockgsettings"],
    desc: "Change to group settings to only admins can edit group info",
    category: "group",
    use: '.unlockgs',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
await conn.groupSettingUpdate(from, 'unlocked')
 await conn.sendMessage(from , { text: `*Group settings Unlocked* 🔓` }, { quoted: mek } )
await conn.sendMessage(from, { react: { text: '🔓', key: mek.key }})
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
    pattern: "leave",
    react: "👋",
    alias: ["left","kickme","titan_leave","titan_left","t-left"],
    desc: "To leave from the group",
    category: "group",
    use: '.leave',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, prefix, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isMe) if (!isOwner) if (!isdev) return reply('🚫 *You must be a Moderator frist*')
 await conn.sendMessage(from , { text: `*Good Bye All* 👋` }, { quoted: mek } )
await conn.sendMessage(from, { react: { text: '👋', key: mek.key }})
 await conn.groupLeave(from) 
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
/*
cmd({
    pattern: "leave",
    react: "🔓",
    alias: ["left","kickme"],
    desc: "To leave from the group",
    category: "profile",
    use: '.leave',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!isGroup) return reply('🚫 *This is Group command*')
if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
 await conn.sendMessage(from , { text: `🔓 *Good Bye All*` }, { quoted: mek } )
 await conn.groupLeave(from) 
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
*/
cmd({
    pattern: "updategname",
    react: "🔓",
    alias: ["upgname","gname"],
    desc: "Change the group name",
    category: "group",
    use: '.updategname',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
if (!q) return reply("🖊️ *Please write the new Group Subject*")
await conn.groupUpdateSubject(from, q )
 await conn.sendMessage(from , { text: `*Group name Updated* ✔️` }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})

cmd({
    pattern: "updategdesc",
    react: "🔓",
    alias: ["upgdesc","gdesc"],
    desc: "Change the group description",
    category: "group",
    use: '.updategdesc',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
if (!q) return reply("🖊️ *Please write the new Group Description*")
await conn.groupUpdateDescription(from, q )
 await conn.sendMessage(from , { text: `*Group Description Updated* ✔️` }, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
cmd({
    pattern: "invite",
    react: "🖇️",
    alias: ["grouplink","glink"],
    desc: "Get the group link",
    category: "group",
    use: '.invite',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
const code = await conn.groupInviteCode(from)
//console.log("group code: " + code)
 await conn.sendMessage(from , { text: `🖇️ *Group Link*\nhttps://chat.whatsapp.com/${code}`}, { quoted: mek } )
} catch (e) {
reply('*Error !!*\n\n' + e )
console.log(e)
}
})

//await sock.groupRevokeInvite("abcd-xyz@g.us")

cmd({
    pattern: "revokelink",
    react: "🖇️",
    alias: ["revokegrouplink","resetglink","revoke","titan_revoke"],
    desc: "Reset the group link",
    category: "group",
    use: '.revokelink',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isGroup) return reply('*This is Group command* 🚫')
if (!isBotAdmins) return reply('*Bot must be Admin frist* 🚫')
if (!isAdmins) { if (!isMe) return reply('*You must be admin frist* 🚫') }
await conn.groupRevokeInvite(from)
 await conn.sendMessage(from , { text: `⛔ *Group link Reseted* ✔️`}, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})


cmd({
    pattern: "tagall",
    react: "🔊",
    alias: ["titan_tagall"],
    desc: "Tag all Members",
    category: "group",
    use: '.tagall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	     if (!isGroup) return reply('*This is Group Command* ❗')
         	if(!isAdmins) { if ( !isMe) return conn.sendMessage(from,{text:"*This is admin only command* 🚫"},{quoted:mek }) }
		if(!isBotAdmins) return reply("*Bot must be Admin Frist* ❌")
		let teks = `💱 *HI ALL ! GIVE YOUR ATTENTION PLEASE* 
 
`
                for (let mem of participants) {
                teks += `🥎 @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })
                
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})

cmd({
    pattern: "tag",
    react: "🔊",
    alias: ["tg","titan_tag"],
    desc: "Tag all Members",
    category: "group",
    use: '.tagall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	     if (!isGroup) return reply('*This is Group Command* ❗')
         	if(!isAdmins) { if ( !isMe) return conn.sendMessage(from,{text:"*This is admin only command* 🚫"},{quoted:mek }) }
		if(!isBotAdmins) return reply("*Bot must be Admin Frist* ❌")
		if(!q) return reply('*Please give me a text* ❌')
		let teks = `${q}`
                conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: mek })
                
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
console.log(e)
}
})

cmd({
    pattern: "join",
    react: "📬",
    alias: ["joinme","titan_join"],
    desc: "To Join a group from the group link",
    category: "group",
    use: '.join',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, isCreator, prefix, isMod, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
//if (!isGroup) return reply('*This is Group command* 🚫')
if (!isMe) if (!isOwner) {if (!isdev) return reply('*You must be a Moderator frist* 🚫') }
if (!q) return reply("🖇️️ *Please write the Group Link*")
 let result = args[0].split('https://chat.whatsapp.com/')[1]
 await conn.groupAcceptInvite(result)
     await conn.sendMessage(from , { text: `*Successfully Joined* ✔️`}, { quoted: mek } )
} catch (e) {
reply('*Error !!*')
console.log(e)
}
})
