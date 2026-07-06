var isRateLimited = pm.response.code === 405 ||
    pm.response.code === 429 ||
    (typeof pm.response.text() === 'string' && pm.response.text().includes('daily request limit'));

pm.test('Status code is 200 (or rate-limited)', function () {
    if (isRateLimited) {
        console.warn('[Showcase] restful-api.dev rate limit hit — skipping assertions');
        pm.expect(pm.response.code).to.be.oneOf([200, 405, 429]);
        return;
    }
    pm.expect(pm.response.code).to.equal(200);
});

// Cleanup complete - clear the chained variable
pm.environment.unset('created_object_id');
console.log('[Showcase] Deleted resource and cleared created_object_id');
