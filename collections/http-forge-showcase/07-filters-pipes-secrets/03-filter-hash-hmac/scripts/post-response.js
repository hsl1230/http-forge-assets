function getHeader(headers, name) {
    const key = Object.keys(headers || {}).find(function (k) {
        return k.toLowerCase() === name.toLowerCase();
    });
    return key ? headers[key] : undefined;
}

pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Math filters resolved query values', function () {
    const args = pm.response.json().args || {};
    pm.expect(args.absValue).to.equal('42');
    pm.expect(args.idPlus).to.be.a('string');
});

pm.test('Hash and HMAC headers look valid', function () {
    const headers = pm.response.json().headers || {};
    const hash = getHeader(headers, 'X-Hash-Sha256');
    const hmac = getHeader(headers, 'X-Hmac-Sha256');
    const formatted = getHeader(headers, 'X-Formatted-Env');

    pm.expect(hash).to.match(/^[a-f0-9]{64}$/);
    pm.expect(hmac).to.match(/^[a-f0-9]{64}$/);
    pm.expect(formatted).to.equal(pm.environment.get('environment_name') + '-' + pm.environment.get('api_version'));
});
