function getHeader(headers, name) {
    var key = Object.keys(headers || {}).find(function (k) {
        return k.toLowerCase() === name.toLowerCase();
    });
    return key ? headers[key] : undefined;
}

pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Secret provider headers are present', function () {
    var headers = pm.response.json().headers || {};
    var names = [
        'X-Secret-Aws',
        'X-Secret-Azure',
        'X-Secret-Gcp',
        'X-Secret-Vault',
        'X-Secret-Op',
        'X-Secret-Doppler'
    ];
    names.forEach(function (name) {
        pm.expect(getHeader(headers, name), name + ' should exist').to.be.a('string').and.not.empty;
    });
});

pm.test('Secret resolution visibility', function () {
    var headers = pm.response.json().headers || {};
    var values = Object.keys(headers)
        .filter(function (k) { return k.toLowerCase().indexOf('x-secret-') === 0; })
        .map(function (k) { return headers[k]; });
    var unresolved = values.filter(function (v) { return typeof v === 'string' && v.indexOf('{{secret:') === 0; });
    console.log('Secret providers resolved: ' + (values.length - unresolved.length) + ', unresolved: ' + unresolved.length);
    pm.expect(values.length).to.equal(6);
});