// Collection-level post-response script
// Runs after EVERY request in this collection.
pm.test('Global: response time is reasonable (< 30s)', function () {
    pm.expect(pm.response.responseTime).to.be.below(30000);
});
console.log('[Showcase] Completed:', pm.info.requestName, '->', pm.response.code);
