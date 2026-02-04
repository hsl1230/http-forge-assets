// Test custom headers
pm.test('Headers are returned', function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.headers['X-Custom-Header-1']).to.exist;
    pm.expect(jsonData.headers['X-Custom-Header-2']).to.equal('Value2');
});