
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGEBuNhEdsdxUBBRF8bKxDwUUWMrNolBxwn/fwO6enoiZnejlqUiKk+dknszvoChxjWzUAuU7qAi+QIq6I20rBBSgNUmCCOiDGFIIFFBayN5NkLpTix0xZb/l+fuLhglvm2OpN4f8dMdbo4CG+e4VPPqgasIMR38AnGfxUou8xezOLfd86AQWmy6TQxEdxmrmRPwqP0btkINmcXoFjw4RYoKL1KwOKEcEZjZqPYjJF+nrN/dyt5NrermlrWCTYG5PpGXVNOv9fOwMmZRmjNSGARd9jf5ZQ5fzYFbKTL5eOM76fkLVeLMuvYS73WVLgsH+fovTl/QJ+OiDGqcFiq0YFRTT9st137gojTasOBovZ2mmj5mrhWvNKC9bfM2SU9yecbkYDwxiLr5GPAxuhY4Oi9iVk1WuOfyQCY5BGLvmSJ0hUQ+ScpPJ55XgX38m7pEPr5z+T917kzWBzOjSuMQ1VuToRqr+gtgz9OheqqiIxmU+k6/nZVZ+jT5z0uy5PWCcXZ2gaKppgzZeBUshbBxxqG1b7sREqucWXsZ+0oe0IX9iKQerbbjdz7jFS4C9utqH8dlQ4ZUpRWEIj70D1gd7dL+LnMmVp/CsDZc8qpnwqhaH3O9xqW+p1LZPeNfTNvslXMja2lBfn4pOqLVioHCPPiAoxTUlkOKy6GKS0AcwvvgoIog+qwtEcbclbpYVts27qbDsaQYJEnsql4WE/a3DpaHuu1Fi7U+voA8qUkaorlE8wTUtSeuiuoYpqoHy97NRnWaC8pKiKY6BAga88MIKIivLgsD+VX+7HiCtYVV9KxAFfZCQMncRUChpUB88/zBZUdI10eT1kcSyHGsKgiirI0nUeUEfiVInMX/LusI5qinMK6BwssgKAs/Kg8c/fVCgG33zT6ea5/ogwaSm66KpshLGH+b6+AijqGwK6rdFpHcHRIDCfoYRpbhI605aU0ASHfAF6Z0OoCQwq9GPQiOC4g8t78tDL+Ou/7vlwHBY0QQd9w7o1+IokvBrfbLnPU6WJZaTJX4wlDmxu9jFHz8YdoAxohBnNVCAPj2fpdnJMB3D4mprPFbNVNVTFXwq+nDomwX8Ur++7EZtKzHjIAoNfU59tOfJjBw3QsrMGcfd3g4BYg7p629AgAJcVuKuJ8dHgjppLqPBeQPp6GJ6u2kb4H3Oj47+5IYknp/Bw4IZGmFQL/hN7zhs7wI183MZV0kQbHLqx6dyV4XwHg21xWuXLUYXHKGfk23OmE/Q/IpoFTZG1vMD4ThJDHvdW68X04NfY3McUmNqryas7xmSk8MVqTSXuUnOPLM8K6RpKQaFuoid+WJ7vKUHXr2+zc5zdrP3nYnfbY2frwlGzxVUwK6DX+jdG/POY+yj/xPI+1b7j82grc9q7W20qG4ut2w7vl6PZF3ksXSHAtdY3v3S3kfDXbC9CDvw6MxeZZAmJcmBAmARkxLHoA9I2XSmtYqk/EMyXWUtM32TnsGaqp+D8JvZ6rZHd8sjZTWB9QEooMh5LexM3apV5VNIP8YKqN0zdRrw+BdNW0Sl+QcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349045077440", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "Yoongi girlie", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "Yoongi girlie", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ",",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
