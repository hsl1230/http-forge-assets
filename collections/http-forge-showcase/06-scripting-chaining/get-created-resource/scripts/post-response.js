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

console.log('created_object_id =', pm.environment.get('created_object_id'));
pm.test('Returned resource matches the id we created', function () {
    if (isRateLimited) { return; }
    pm.expect(String(pm.response.json().id)).to.equal(pm.environment.get('created_object_id'));
});
