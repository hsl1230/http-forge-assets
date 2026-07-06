pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Response contains an access token', function () {
    pm.expect(pm.response.json().accessToken).to.be.a('string').and.not.empty;
});

// Capture the JWT so the next request can use it (request chaining)
const json = pm.response.json();
pm.environment.set('access_token', json.accessToken);
console.log('[Showcase] Stored access_token from login');
