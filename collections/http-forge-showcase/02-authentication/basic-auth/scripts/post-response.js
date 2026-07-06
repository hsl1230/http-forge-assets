pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Authenticated flag is true', function () {
    pm.expect(pm.response.json().authenticated).to.be.true;
});
