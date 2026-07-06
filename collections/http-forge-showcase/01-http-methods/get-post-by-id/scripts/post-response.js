pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Returned post matches requested id', function () {
    const json = pm.response.json();
    pm.expect(String(json.id)).to.equal(pm.environment.get('post_id'));
});
