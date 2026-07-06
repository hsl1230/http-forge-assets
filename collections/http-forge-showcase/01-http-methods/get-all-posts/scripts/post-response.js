pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Response is a non-empty array', function () {
    const json = pm.response.json();
    pm.expect(json).to.be.an('array');
    pm.expect(json.length).to.be.above(0);
});
