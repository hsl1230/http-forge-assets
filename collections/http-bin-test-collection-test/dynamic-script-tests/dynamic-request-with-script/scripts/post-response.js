// Complex test script
pm.test('Response is valid', function() {
    pm.response.to.have.status(200);
    pm.response.to.be.json;
});

pm.test('Response contains our data', function() {
    const responseJson = pm.response.json();
    const requestBody = pm.request.body.raw ? JSON.parse(pm.request.body.raw) : {};
    
    pm.expect(responseJson.json.operation).to.equal('calculate');
    if (requestBody.values) {
        pm.expect(responseJson.json.values).to.eql(requestBody.values);
    }
});

pm.test('Performance test', function() {
    pm.expect(pm.response.responseTime).to.be.below(parseInt(pm.environment.get('request_timeout')));
});

// Extract and log response data
const responseData = pm.response.json();
console.log('Response received:', {
    url: responseData.url,
    headers: Object.keys(responseData.headers).length,
    origin: responseData.origin
});

// Chain requests - set up for next request
pm.environment.set('last_response_data', JSON.stringify(responseData.json));