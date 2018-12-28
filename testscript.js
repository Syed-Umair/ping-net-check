const {netCheck} = require('./index');

setInterval(async () => {
    console.log(await netCheck());
}, 4500);
