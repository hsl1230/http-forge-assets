// Test PUT request
pm.test('PUT request successful', function() {
    pm.response.to.have.status(200);
});

pm.test('Response contains request data', function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('json');
    pm.expect(jsonData).to.have.property('headers');
});