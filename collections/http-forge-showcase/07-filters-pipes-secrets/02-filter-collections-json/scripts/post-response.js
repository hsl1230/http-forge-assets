pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Array/object/json filters resolved body values', function () {
    var body = pm.response.json();
    var echoed = body.json || {};
    var users = JSON.parse(pm.environment.get('users_json') || '[]');
    var expectedFirst = users[0] ? users[0].name : '';
    var expectedSenior = users.filter(function(u){ return u.age >= 30; }).map(function(u){ return u.name; }).join(',');
    pm.expect(echoed.firstUser).to.equal(expectedFirst);
    pm.expect(echoed.seniorUsers).to.equal(expectedSenior);
    pm.expect(echoed.uniqueTags).to.be.a('string').and.not.empty;
});