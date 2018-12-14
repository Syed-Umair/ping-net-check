const { Resolver } = require('dns');
const ping = require('net-ping');
const defaults = {
    host: 'google.com',
    timeout: 2000
}

function getIp(options) {
    if(options && options.host && options.timeout) {
        return new Promise((resolve, reject) => {
            const resolver = new Resolver();
            setTimeout(() => {
                resolver.cancel();
                reject(new Error('Get IP timedOut'));
            }, options.timeout);
            resolver.resolve4(options.host, (err, addresses) => {
                if (err) {
                    reject(err);
                }
                if (addresses && addresses.length > 0) {
                    // console.log('addresses::', addresses);
                    resolve(addresses[0]);
                } else {
                    reject(new Error(`No Address Found for the ${options.host}`));
                }
            });
        });
    } else {
        throw new Error("Invalid Parameters");
    }
}

function hitIp(ip, timeout) {
    if (ip && timeout) {
        return new Promise((resolve, reject) => {
            var session = ping.createSession({
                timeout
            });
            session.pingHost(ip, function (error, target) {
                if (error) {
                    // console.log (target + ": " + error.toString ());
                    reject(error);
                } else {
                    // console.log (target + ": Alive");
                    resolve(true);
                }
            });
        });
    } else {
        throw new Error("Invalid Parameters");
    }
}

async function netCheck(options) {
    try {
        options = {
            ...defaults,
            ...options
        };
        let ip = await getIp(options);
        return await hitIp(ip, options.timeout)
    } catch (e) {
        // console.error(e);
        return false;
    }
}

module.exports = {
    getIp,
    hitIp,
    netCheck
}
