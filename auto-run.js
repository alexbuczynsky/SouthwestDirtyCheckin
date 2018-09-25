var moment = require('moment-timezone');
var schedule = require('node-schedule');

var nodemailer = require('nodemailer');




var argv = require('optimist')
    .usage('Check in to Southwest Flight. \nUsage: $0')
    .demand(['c', 'f', 'l', 'd'])
    .string(['c', 'f', 'l', 'd'])
    .alias('c', 'confirmation')
    .alias('f', 'firstName')
    .alias('l', 'lastName')
    .alias('d', 'date of flight (UTC)')
    .describe('show', 'Show Electron window')
    .argv;

//add timeinput

const show = !!argv.show
const confirmationNumber = argv.c;
const firstName = argv.f;
const lastName = argv.l;
const flightDateString = argv.d;

// var mailOptions = {
//     from: 'a.buczynsky@gmail.com',
//     to: 'a.buczynsky@gmail.com',
//     subject: `Flight Auto-Checkin Status for ${confirmationNumber}`,
//     text: 'No information...',
//     auth : {
//         user         : user_name,
//         refreshToken : refresh_token,
//         accessToken  : access_token,
//         expires      : 1494388182480
//     }
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

var flightDate = moment(flightDateString).toDate();
console.log(flightDate)

var j = schedule.scheduleJob(flightDate, function (fireDate) {
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
    let cmd = `node index.js -c ${confirmationNumber} -f ${firstName} -l ${lastName}`;
    if (show) cmd += ' --show'

    const {exec} = require('child_process');
    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            // mailOptions.text = `Failed to check you in...\n Console output: ${stdout}, \n\n error: ${err}`
            return;
        }else{
            // mailOptions.text = `Successfully checked you in!\n ${stdout}`
        }
        console.log(stdout);
    });
});
return;
