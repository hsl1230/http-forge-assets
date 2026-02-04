# Test Suites

Test suites let you run multiple requests across collections with summary results.

## Create a suite
1. Create a suite under `storage.root/suites`.
2. Add requests from collections.
3. Save the suite.

## Run a suite
1. Select a suite.
2. Run it from the suite runner.
3. Review results in `storage.results`.

## Authentication
Test suites fully support all authentication types:
- **Inherit**: Uses environment or collection auth
- **Bearer**: Token-based authentication
- **Basic**: Username/password authentication
- **API Key**: Header or query parameter auth

Auth settings from individual requests are preserved when running in a suite.

## Pass/Fail Logic

### With Assertions
When a request has assertions defined (using `ctx.test()` in post-response scripts), **pass/fail is determined entirely by assertion results**. This allows you to test expected error responses:

```javascript
// Test that invalid ID returns 404
ctx.test('Invalid ID returns 404', () => {
    ctx.expect(ctx.response.status).to.equal(404);
});

ctx.test('Error message present', () => {
    ctx.expect(ctx.response.json()).to.have.property('error');
});
```

### Without Assertions
When no assertions are defined, pass/fail is based on HTTP status code:
- **Pass**: Status 200-302 (success and redirect responses)
- **Fail**: All other status codes (4xx, 5xx errors)

## Results
- Pass/fail summary
- Individual request results with status and duration
- Performance stats: P50/P90/P95/P99
- Error breakdown

## Virtual Scrolling
Results use virtual scrolling for performance with large test runs. The results panel automatically adjusts to container height.

## Example suite run
Run the "smoke" suite against `sit` to validate core endpoints before release.

## Tips
- Keep suite names stable for reporting.
- Use environments to run the same suite against different targets.
- Define assertions for requests that test error conditions (404, 401, etc.).
