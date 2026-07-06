pm.test('Status code is 201 (Created)', function () {
    pm.response.to.have.status(201);
});

pm.test('Response echoes the title we sent', function () {
    const sent = JSON.parse(pm.request.body.raw);
    const json = pm.response.json();
    pm.expect(json.title).to.equal(sent.title);
});

// Store the created id in a separate variable (jsonplaceholder fakes creation,
// so we keep post_id pointing at a real, fetchable record).
const created = pm.response.json();
pm.environment.set('created_post_id', String(created.id));
console.log('[Showcase] Created post id =', created.id);

pm.environment.set('postId', pm.response.json().id);
pm.environment.set('userId', pm.response.json().userId);
pm.environment.set('postTitle', pm.response.json().title);

pm.test("Response status code is received", function() { pm.expect(pm.response.code).to.be.a('number'); });

pm.test("Content-Type header is present", function() { pm.expect(pm.response.headers.has('Content-Type')).to.be.true; });

pm.test("Response body is not undefined", function() { pm.expect(pm.response.text()).to.not.be.undefined; });

pm.test("Response body is a valid string", function() { pm.expect(pm.response.text()).to.be.a('string'); });

pm.test("If JSON body, it parses without error", function() { try { var jsonData = pm.response.json(); pm.expect(jsonData).to.not.be.null; } catch(e) { pm.expect(pm.response.text().length).to.be.at.most(0); } });

pm.test("Response time is within acceptable range", function() { pm.expect(pm.response.responseTime).to.be.a('number'); pm.expect(pm.response.responseTime).to.be.below(5000); });

pm.test("Response headers object is present", function() { pm.expect(pm.response.headers).to.be.an('object'); });