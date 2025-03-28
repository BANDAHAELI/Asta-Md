//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.IS_ASTA = true;
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/ZkBjWK2.jpg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "9223253617422";
global.owner = process.env.OWNER_NUMBER || "923253617422";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID || "SARKAR;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01tNTJFekszNnpBeHlGYkxxMDUvbW05dFYwR2VCUUxGbE1VY1ZFY3psTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWNXSHg2TmhXbHo4L2Y0b25iM3FIQ0lQaG5sek83NXBTZmJZVEFoL0VnUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRWk5YTlrZlVpeTdYcDArTnFlS2J4Z25kVmxvRWgxWHZjd2FlOW1PYTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkhVZ1pkQnA4MmJRMkpINllYNzRnTzZjU2FLcGNCL085VHVKdEJHS2hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMeWJHVi85aEgxMmFEcTltV0tmZndWNGJ3d1dWTXVXRVhFQm1YY0tPa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InovN25Qd0ovOXY5OUVSamxhOXVkOFgzOTRTWXZJRzJIWDNybVRtNW00a0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9KMDBwQndKZDNZUFhpVzlXQ05wdTAzK21OVWhCa1BhdjI4cnZwM0ltND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjZDOW13c09uY3hWR1hxNUJiSUN5Q0hJZlc5Q212dXV1UzJXMGNLNCt4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRFZzhHNXJIbGk2SGRqc01oZTQ2YUkrUmEwVWtta2xueWpsSktVTFZ5OFd0M0pnb0MzWEFmOTJDeUJhYXRVaUVMQlVsVHd6ZVBGaHZ6cUZCQWNCd0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IkxPOUo4eGNPa0ZRZ2ZlWEc2dkNXTSs2TVdWdWNvaDNWSXl2eHBQa3BaNEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDAzMDM3Mjg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdDNDY0MTE3REEzOTc0MjI1RDdDRDU0REYzNzkxQjZBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDMxMjY3NTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwMzAzNzI4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQjY1Q0ZEQzEwNTY4MDAzMkZGOTRGODUwQTExNUU2MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzMTI2NzU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2WFVTNkpPT1FBMlZ2WWFGNzUyckZnIiwicGhvbmVJZCI6IjkyMmIxZDMzLTIzMzItNGVlYS04MzUwLTIzZjgzMjUwNWY3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGWnNXcFJYTnRhMHRqRDluR2FaRjJLb3YxUG89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNwTEFxZkprUXJHWTlON2xiN0hvQU10b08xYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PNmpvWUhFTk9CbUw4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllXaVdDeTJ2V1VsOEJ0dDVaYWltbVFPQUpaejRtbVlLTkVyVFBtQzFIQnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJ1UmE3M1M4Z2RMamdpMjc0ejcwMDJoMnVnbG9MdjJHQWhTYk1kRTZCUWk0STJqK3JVOU1TMTY2T3FhOTRoRzRhcWtPZ1hGc3U2eGhZZ2c5ckNLQkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQVWNOazFJeStobmQ0RWI4NUhYa0RaR0gvZjByS0RNMGVESzFpaFNpSFpmUTJMa00yd3k4RCtscEhPTUdVNEl5MEgySWxWTCsvcnBITm9XYWpvRnJDUT09In0sIm1lIjp7ImlkIjoiOTIzNDAzMDM3Mjg1OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNpbXBsZfCfpbIifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDAzMDM3Mjg1OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldGb2xnc3RyMWxKZkFiYmVXV29wcGtEZ0NXYytKcG1DalJLMHo1Z3RSd2IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDMxMjY3NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlRWIn0=";
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴀsᴛᴀ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴀsᴛᴀ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});




/*

   //#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bandahealimaree@gmail.com";
global.location = "sindh*,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/karachi";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/57cp07.jpg";
global.devs = "923253617422";
global.sudo = process.env.SUDO || "923253617422";
global.owner = process.env.OWNER_NUMBER || "923253617422";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID || "SARKAR;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01tNTJFekszNnpBeHlGYkxxMDUvbW05dFYwR2VCUUxGbE1VY1ZFY3psTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWNXSHg2TmhXbHo4L2Y0b25iM3FIQ0lQaG5sek83NXBTZmJZVEFoL0VnUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRWk5YTlrZlVpeTdYcDArTnFlS2J4Z25kVmxvRWgxWHZjd2FlOW1PYTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkhVZ1pkQnA4MmJRMkpINllYNzRnTzZjU2FLcGNCL085VHVKdEJHS2hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMeWJHVi85aEgxMmFEcTltV0tmZndWNGJ3d1dWTXVXRVhFQm1YY0tPa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InovN25Qd0ovOXY5OUVSamxhOXVkOFgzOTRTWXZJRzJIWDNybVRtNW00a0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9KMDBwQndKZDNZUFhpVzlXQ05wdTAzK21OVWhCa1BhdjI4cnZwM0ltND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjZDOW13c09uY3hWR1hxNUJiSUN5Q0hJZlc5Q212dXV1UzJXMGNLNCt4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRFZzhHNXJIbGk2SGRqc01oZTQ2YUkrUmEwVWtta2xueWpsSktVTFZ5OFd0M0pnb0MzWEFmOTJDeUJhYXRVaUVMQlVsVHd6ZVBGaHZ6cUZCQWNCd0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IkxPOUo4eGNPa0ZRZ2ZlWEc2dkNXTSs2TVdWdWNvaDNWSXl2eHBQa3BaNEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDAzMDM3Mjg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdDNDY0MTE3REEzOTc0MjI1RDdDRDU0REYzNzkxQjZBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDMxMjY3NTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwMzAzNzI4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQjY1Q0ZEQzEwNTY4MDAzMkZGOTRGODUwQTExNUU2MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzMTI2NzU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2WFVTNkpPT1FBMlZ2WWFGNzUyckZnIiwicGhvbmVJZCI6IjkyMmIxZDMzLTIzMzItNGVlYS04MzUwLTIzZjgzMjUwNWY3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGWnNXcFJYTnRhMHRqRDluR2FaRjJLb3YxUG89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNwTEFxZkprUXJHWTlON2xiN0hvQU10b08xYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PNmpvWUhFTk9CbUw4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllXaVdDeTJ2V1VsOEJ0dDVaYWltbVFPQUpaejRtbVlLTkVyVFBtQzFIQnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJ1UmE3M1M4Z2RMamdpMjc0ejcwMDJoMnVnbG9MdjJHQWhTYk1kRTZCUWk0STJqK3JVOU1TMTY2T3FhOTRoRzRhcWtPZ1hGc3U2eGhZZ2c5ckNLQkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQVWNOazFJeStobmQ0RWI4NUhYa0RaR0gvZjByS0RNMGVESzFpaFNpSFpmUTJMa00yd3k4RCtscEhPTUdVNEl5MEgySWxWTCsvcnBITm9XYWpvRnJDUT09In0sIm1lIjp7ImlkIjoiOTIzNDAzMDM3Mjg1OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNpbXBsZfCfpbIifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDAzMDM3Mjg1OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldGb2xnc3RyMWxKZkFiYmVXV29wcGtEZ0NXYytKcG1DalJLMHo1Z3RSd2IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDMxMjY3NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlRWIn0=";
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©𝐁𝐚𝐧𝐝𝐚𝐡𝐞𝐚𝐥𝐢",
  author: process.env.PACK_AUTHER || "𝐁𝐚𝐧𝐝𝐚𝐡𝐞𝐚𝐥𝐢",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐁𝐚𝐧𝐝𝐚𝐡𝐞𝐚𝐥𝐢",
  ownername: process.env.OWNER_NAME || "𝐁𝐚𝐧𝐝𝐚𝐡𝐞𝐚𝐥𝐢",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Asta").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
*/
