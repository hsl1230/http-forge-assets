pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Response took at least 3 seconds', function () {
    pm.expect(pm.response.responseTime).to.be.above(2900);
});
