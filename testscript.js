const {netCheck} = require('./index');

setInterval(async () => {
    console.time('Check');
    console.log(await netCheck());
    console.timeEnd('Check');
}, 3500);
