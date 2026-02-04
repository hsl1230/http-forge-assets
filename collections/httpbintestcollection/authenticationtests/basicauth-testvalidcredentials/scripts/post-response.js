// Test script for Basic Auth
pm.test('Status code is 200', function() {
    pm.response.to.have.status(200);
});

pm.test('Response has valid JSON', function() {
    pm.response.to.be.json;
});

pm.test('Authentication was successful', function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.authenticated).to.be.true;
    pm.expect(jsonData.user).to.equal(pm.environment.get('username'));
});

// Store response data in environment variable
const responseTime = pm.response.responseTime;
pm.environment.set('last_response_time', responseTime);
console.log('Response time:', responseTime, 'ms');