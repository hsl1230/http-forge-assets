pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Title was updated', function () {
    pm.expect(pm.response.json().title).to.equal('Fully Updated Title');
});
