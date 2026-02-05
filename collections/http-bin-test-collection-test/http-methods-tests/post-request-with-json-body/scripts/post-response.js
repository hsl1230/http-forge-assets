// Test POST request
pm.test('POST request successful', function() {
    pm.response.to.have.status(200);
});

pm.test('Response contains sent JSON', function() {
    const responseJson = pm.response.json();
    const requestJson = JSON.parse(pm.request.body.raw);
    
    pm.expect(responseJson.json.userId).to.equal(requestJson.userId);
    pm.expect(responseJson.json.title).to.equal(requestJson.title);
    pm.expect(responseJson.json.body).to.equal(requestJson.body);
});

// Extract and store data from response
const responseData = pm.response.json();
pm.environment.set('last_post_url', responseData.url);
pm.environment.set('last_post_headers', JSON.stringify(responseData.headers));