const {netCheck, NETWORK_CHECK_URLS, checkReachablity} = require('./index');

// setInterval(async () => {
//     console.time('Check');
//     console.log(await netCheck());
//     console.timeEnd('Check');
// }, 3500);

// (async ()=>{
//     console.log('getIp: images.sb.a-cti.com => ', await netCheck({
//         host: 'images.sb.a-cti.com',
//         timeout: 3500
//     }));

//     console.log('getIp: frys.com => ', await netCheck({
//         host: 'frys.com',
//         timeout: 3500
//     }));
// })();


(async ()=>{
    for (let url of NETWORK_CHECK_URLS){
        console.log(`URL: ${url} => ${await checkReachablity(url, 3500)}`);
    }
})();


