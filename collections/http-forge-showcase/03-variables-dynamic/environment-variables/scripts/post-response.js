pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Query params were resolved from the environment', function () {
    const args = pm.response.json().args;
    pm.expect(args.env).to.equal(pm.environment.get('environment_name'));
    pm.expect(args.api).to.equal(pm.environment.get('api_version'));
});
