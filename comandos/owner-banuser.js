let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 

let who
let pp = './galeria/menudorrat3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `*[β] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
let users = global.db.data.users
users[who].banned = true
await conn.sendButton(m.chat, `*β USUARIO BANEADO\nBANEADO @${who.split`@`[0]}*`, wm,  pp,[
['πΌπ΄π½π', `#menusimple`]], m)}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
