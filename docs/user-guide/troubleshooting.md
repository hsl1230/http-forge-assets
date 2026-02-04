# Troubleshooting & FAQs

## Common issues

### Configuration not applied
- Ensure `http-forge.config.json` is at the workspace root.
- Validate JSON syntax (errors prevent load).
- See: configuration.md

### Test suite shows request as failed when status is expected
- When testing error conditions (404, 401, etc.), add assertions to define expected behavior.
- Without assertions, pass/fail is based on HTTP status (200-302 = pass).
- With assertions, pass/fail is determined by assertion results only.
- Example assertion for expected 404:
  ```javascript
  ctx.test('Not found returns 404', () => {
      ctx.expect(ctx.response.status).to.equal(404);
  });
  ```
- See: scripts-assertions.md

### History or results not showing
- Verify `storage.history` and `storage.results` paths.
- Ensure the folders are writable.

### Variables not resolving
- Check environment selection.
- Confirm variable names match `{{var}}` usage.
- Verify local vs shared config precedence.
- See: environments-variables.md

### Scripts failing
- Validate syntax and available globals.
- Review script console output in the Response panel.
- If using custom modules, confirm module paths and installation.
- See: scripts-assertions.md and custom-modules.md

### Requests fail with SSL errors
- Set `request.strictSSL` to `false` for non-production endpoints.

### Postman import looks wrong
- Check request/folder names for conflicts.
- Validate collection format version.
- See: import-export.md

### Codegen produces empty clients
- Confirm collections are under `storage.root/collections`.
- Ensure `request.json` files exist.

### Playwright integration not finding collections
- Ensure `http-forge.config.json` path is correct.
- Verify collection structure and naming.

## FAQ

### Where are histories stored?
In `storage.history` for local history, and `storage.root/shared-histories` for shared history items.

### Should I commit history files?
No. Keep history/results in .gitignore. Shared history is optional to commit.

### How do I reset state?
Delete `storage.history` and `storage.results` folders.
