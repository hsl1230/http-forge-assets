pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Server received our dynamic values', function () {
    const echoed = pm.response.json().json;
    pm.expect(echoed.requestId).to.be.a('string').and.not.empty;
    pm.expect(echoed.randomNumber).to.be.a('number');
});
