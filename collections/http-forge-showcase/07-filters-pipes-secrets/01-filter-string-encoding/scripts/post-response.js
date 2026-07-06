function getHeader(headers, name) {
    const key = Object.keys(headers || {}).find(function (k) {
        return k.toLowerCase() === name.toLowerCase();
    });
    return key ? headers[key] : undefined;
}

pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('String filter pipes resolved query values', function () {
    const args = pm.response.json().args || {};
    const fullName = (pm.environment.get('full_name') || '').trim();
    const expectedUpper = fullName.toUpperCase();
    const expectedSlug = fullName.toLowerCase().replace(/\s+/g, '-');
    const expectedCsvLen = String((pm.environment.get('csv_tags') || '').split(',').length);

    pm.expect(args.upper).to.equal(expectedUpper);
    pm.expect(args.slug).to.equal(expectedSlug);
    pm.expect(args.csvLen).to.equal(expectedCsvLen);
});

pm.test('Header pipes resolved values', function () {
    const headers = pm.response.json().headers || {};
    pm.expect(getHeader(headers, 'X-Name-Short')).to.be.a('string').and.not.empty;
    pm.expect(getHeader(headers, 'X-Payload-Base64')).to.be.a('string').and.not.empty;
});
