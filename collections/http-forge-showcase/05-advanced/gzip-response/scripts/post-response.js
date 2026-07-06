pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Response was gzipped and decompressed', function () {
    pm.expect(pm.response.json().gzipped).to.be.true;
});
