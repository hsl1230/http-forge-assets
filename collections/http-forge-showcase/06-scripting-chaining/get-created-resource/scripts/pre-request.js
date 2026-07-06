const id = pm.environment.get('created_object_id');
if (!id) {
    console.warn('[Showcase] No created_object_id - run "Create Resource" first.');
}
