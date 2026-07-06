pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Only the title changed', function () {
    pm.expect(pm.response.json().title).to.equal('Partially Patched Title');
});
