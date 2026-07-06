var isRateLimited = pm.response.code === 405 ||
    (pm.response.code === 429) ||
    (typeof pm.response.text() === 'string' && pm.response.text().includes('daily request limit'));

pm.test('Status code is 200 (or rate-limited)', function () {
    if (isRateLimited) {
        console.warn('[Showcase] restful-api.dev rate limit hit — skipping assertions');
        pm.expect(pm.response.code).to.be.oneOf([200, 405, 429]);
        return;
    }
    pm.expect(pm.response.code).to.equal(200);
});

pm.test('Response includes a generated id', function () {
    if (isRateLimited) { return; }
    pm.expect(pm.response.json().id).to.exist;
});

// Chain: store the new id so the next requests can use it
if (!isRateLimited) {
    const created = pm.response.json();
    pm.environment.set('created_object_id', String(created.id));
    console.log('[Showcase] Stored created_object_id =', created.id);
}
