// Test for Bearer Token
pm.test('Bearer token was accepted', function() {
    pm.response.to.have.status(200);
    const jsonData = pm.response.json();
    pm.expect(jsonData.authenticated).to.be.true;
});

pm.test('Token is in response', function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.token).to.equal(pm.environment.get('auth_token'));
});

// Test response headers
pm.test('Response has content-type header', function() {
    pm.response.to.have.header('Content-Type');
});