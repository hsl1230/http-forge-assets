pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Returns a page of characters', function () {
    const results = pm.response.json().data.characters.results;
    pm.expect(results).to.be.an('array').and.not.empty;
});
