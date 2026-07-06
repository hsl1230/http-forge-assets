pm.test('Server returned the expected 404', function () {
    pm.response.to.have.status(404);
});
