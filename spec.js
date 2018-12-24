const {
    NETWORK_CHECK_URLS,
    getRandomURL,
    getIp,
    hitIp,
    checkReachablity,
    netCheck
} = require('./index');

jest.setTimeout(10000);

describe('Ping based NetCheck', () => {

    test('getRandomURL Method should return a valid URL', () => {
		expect(NETWORK_CHECK_URLS.includes(getRandomURL())).toBeTruthy();
    })

    test('test getIp method without parameters', () => {
        expect(getIp).toThrowError();
    });

    test('test getIp method with valid parameters', async () => {
        expect(await getIp('google.com', 2000)).toBeTruthy();
    });

    test('test getIp method with impossible timeout', () => {
        expect(getIp.bind('google.com', 0)).toThrowError();
    });

    test('test hitIp method without parameters', () => {
        expect(hitIp).toThrowError();
    });

    test('test hitIp method with valid parameters', async ()=> {
        expect(await hitIp('172.217.18.196', 2000)).toBeTruthy();
    });

    test('test checkReachability method without parameters', () => {
        expect(checkReachablity).rejects;
    });

    test('test checkReachability method with valid parameters', async () => {
        expect(await checkReachablity('google.com', 2000)).toBeTruthy();
    });

    test('test netCheck method', async () => {
        expect(await netCheck()).toBeTruthy();
    });

    test('test netCheck method with impossible timeout', async () => {
        expect(await netCheck({
            timeout: 1
        })).toBeFalsy();
    });

});
