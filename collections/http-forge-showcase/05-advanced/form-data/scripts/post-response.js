pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Form fields were received', function () {
    if (pm.response.code !== 200) {
        console.warn('Skipping form assertions: service returned ' + pm.response.code);
        return;
    }
    const form = pm.response.json().form;
    pm.expect(form.username).to.equal(pm.environment.get('basic_user'));
    pm.expect(form.role).to.equal('demo');
});
