var serviceDown = pm.response.code === 502 || pm.response.code === 503;

pm.test('Followed redirects to final 200 (or service unavailable)', function () {
    if (serviceDown) {
        console.warn('[Showcase] httpbin.org unavailable (' + pm.response.code + ') — skipping redirect assertions');
        pm.expect(pm.response.code).to.be.oneOf([200, 502, 503]);
        return;
    }
    pm.expect(pm.response.code).to.equal(200);
});

pm.test('Landed on /get', function () {
    if (serviceDown) { return; }
    pm.expect(pm.response.json().url).to.contain('/get');
});

pm.test('Global: response time is reasonable (< 30s)', function () {
    pm.expect(pm.response.responseTime).to.be.below(30000);
});