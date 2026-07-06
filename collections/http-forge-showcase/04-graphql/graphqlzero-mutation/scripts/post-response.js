pm.test('Status code is 200', function () {
    pm.response.to.have.status(200);
});

pm.test('Mutation returned a created post with an id', function () {
    const post = pm.response.json().data.createPost;
    pm.expect(post.id).to.exist;
    pm.expect(post.title).to.be.a('string').and.not.empty;
});
