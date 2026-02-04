// Test GET request
pm.test('GET request successful', function() {
    pm.response.to.have.status(200);
});

pm.test('Query parameters are returned', function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.args.page).to.equal('1');
    pm.expect(jsonData.args.limit).to.equal('10');
    pm.expect(jsonData.args.filter).to.equal(pm.environment.get('dynamic_value'));
});

// Store URL for reference
pm.environment.set('last_request_url', pm.request.url.toString());