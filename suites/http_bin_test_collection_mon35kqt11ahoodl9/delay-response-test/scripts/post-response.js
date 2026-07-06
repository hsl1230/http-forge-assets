// Test delayed response
pm.test('Delayed response received', function() {
    pm.response.to.have.status(200);
});

pm.test('Response time is reasonable', function() {
    pm.expect(pm.response.responseTime).to.be.above(2900);
    pm.expect(pm.response.responseTime).to.be.below(3500);
});