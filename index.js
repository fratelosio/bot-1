//npm init -y && npm i node@16.17.0
const keepAlive = require('./server'); const Monitor = require('ping-monitor'); keepAlive(); const monitor = new Monitor({ website: '', title: 'NAME', interval: 2 }); monitor.on('up', (res) => console.log(its on.)); monitor.on('down', (res) => console.log( it has died - ${res.statusMessage})); monitor.on('stop', (website) => console.log(has stopped.) ); monitor.on('error', (error) => console.log(error));
//import the Discord Library
const Discord = require("discord.js");
const colors = require("colors");
const chalk = require('chalk');


const client = new Discord.Client({
  restTimeOffset: 0,
  allowedMentions: {
    parse: [ ],
    repliedUser: false
  },
  restWsBridgeTimeout: 100,
  shards: "auto",
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_PRESENCES
  ]
});

const config = require("./botconfig/config.json");

const Enmap = require("enmap");

client.settings = new Enmap({
  name: "settings",
  dataDir: "./dbs/1"
});

client.jointocreatemap = new Enmap({
  name: "settings",
  dataDir: "./dbs/jointocreatemap"
});

require(./modules/cmds)(client);
require(./modules/jointocreate)(client);


process.on('unhandledRejection', (reason, p) => {
  console.log('\n\n\n\n\n=== unhandled Rejection ==='.toUpperCase().yellow.dim);
  console.log('Reason: ', reason.stack ? String(reason.stack).gray : String(reason).gray);
  console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase().yellow.dim);
});
process.on("uncaughtException", (err, origin) => {
  console.log('\n\n\n\n\n\n=== uncaught Exception ==='.toUpperCase().yellow.dim);
  console.log('Exception: ', err.stack ? err.stack : err)
  console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase().yellow.dim);
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('=== uncaught Exception Monitor ==='.toUpperCase().yellow.dim);
});
process.on('beforeExit', (code) => {
  console.log('\n\n\n\n\n=== before Exit ==='.toUpperCase().yellow.dim);
  console.log('Code: ', code);
  console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase().yellow.dim);
});
process.on('exit', (code) => {
  console.log('\n\n\n\n\n=== exit ==='.toUpperCase().yellow.dim);
  console.log('Code: ', code);
  console.log('=== exit ===\n\n\n\n\n'.toUpperCase().yellow.dim);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log('\n\n\n\n\n=== multiple Resolves ==='.toUpperCase().yellow.dim);
  console.log(type, promise, reason);
  console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase().yellow.dim);
});
setTimeout(() => {
  if (!client  !client.user) {
    console.log(chalk.red([DISCONNECTED] Something Went Wrong))
    process.kill(1);
  } else {
  console.log(chalk.green([CONNECTED] Successfully))
  }
}, 3000);

process.on("rejectionHandled", error => {
    return;
});
process.on("uncaughtException", error => {
    return;
});



client.login(process.env.supernova);

process.on("multipleResolves", (type, promise, reason) => {
    if (reason.toLocaleString() === "Error: Cannot perform IP discovery - socket closed") return;
});

async function up() {
    const axios = require('axios');

    axios({
        method: 'get',
        url: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co,
        timeout: 1000
    }).then(async () => {
        console.log((Repl has been pinged succesfully).blue.bold);
    });
}
//Fix kill 1 error  Auto Kill 1
setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 310060);