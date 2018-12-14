const {
    getIp,
    hitIp,
    netCheck
} = require('./index');

describe ('Ping based NetCheck', () => {
    test('test getIp method without parameters', () => {
        expect(getIp).toThrowError();
    });

    test('test getIp method with valid parameters', async () => {
        expect(await getIp({
            host: 'google.com',
            timeout: 2000
        })).toBeTruthy();
    });

    test('test hitIp method without parameters', () => {
        expect(hitIp).toThrowError();
    });

    test('test hitIp method with valid parameters', async ()=> {
        expect(await hitIp('127.0.0.1', 2000)).toBeTruthy();
    });

    test('test netCheck method', async () => {
        expect(await netCheck()).toBeTruthy();
    });

    test('test netCheck method with impossible timeout', async () => {
        expect (await netCheck({
            timeout: 5
        })).toBeFalsy();
    })
});