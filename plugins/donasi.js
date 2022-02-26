let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6281322577123
│┝‷✧ *Dana:* 6281322577123
│┝‷✧ *Linkaja:* 6281322577123
│┝‷✧ *Gopay:* 6281322577123
│┝‷✧ *Ovo:* 6281322577123
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6281322577123?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
