const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'QvE02RCZ#QAU0WhUpFNXPCXail3hvuKORP4VbcpIUOoUJl_9_d48' : process.env.SESSION_ID,
};    
