pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Continent has countries', function () {
    const data = pm.response.json().data;
    pm.expect(data.continent.countries).to.be.an('array').and.not.empty;
});
