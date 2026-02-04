# Scripts & Assertions

HTTP Forge scripts are Postman‑compatible and run in two phases.

## Phases
- **Pre‑request**: modify request, set variables
- **Post‑response**: validate response, assert expectations

## Aliases
You can use any alias:
- `ctx` (recommended)
- `pm`
- `agl`

## Request API (pre‑request)
- `ctx.request.url`
- `ctx.request.method`
- `ctx.request.headers`
- `ctx.request.body`
- `ctx.request.params`
- `ctx.request.query`
- `ctx.request.setHeader(name, value)`
- `ctx.request.removeHeader(name)`

## Response API (post‑response)
- `ctx.response.status` / `ctx.response.statusText`
- `ctx.response.headers`
- `ctx.response.cookies`
- `ctx.response.json()` / `ctx.response.text()`
- `ctx.response.responseTime`

## Variables API
Scopes:
- `ctx.variables` (session)
- `ctx.environment`
- `ctx.collectionVariables`
- `ctx.globals`

Methods:
- `get`, `set`, `unset`, `clear`, `has`, `toObject`

## Tests & assertions
- `ctx.test(name, fn)`
- `ctx.expect(value)`
- `ctx.response.to.have.status()`
- `ctx.response.to.have.header()`
- `ctx.response.to.have.jsonBody()`

### How assertions affect pass/fail

**In Test Suites**: When assertions are defined, they determine whether a request passes or fails. This is useful for testing expected error conditions:

```javascript
// This test expects a 404, so the request passes when 404 is returned
ctx.test('Missing resource returns 404', () => {
    ctx.expect(ctx.response.status).to.equal(404);
});
```

**In Request Tester**: Assertions are displayed in the Tests tab. Pass/fail is shown with green/red indicators.

## Send additional requests
```javascript
ctx.sendRequest({
	url: '{{baseUrl}}/health',
	method: 'GET'
}, (err, res) => {
	if (err) console.error(err);
	console.log(res.status);
});
```

## Example: pre‑request
```javascript
ctx.environment.set('timestamp', Date.now().toString());
ctx.request.setHeader('X-Trace', ctx.environment.get('timestamp'));
```

## Example: validate JSON schema (simple)
```javascript
ctx.test('has user id', () => {
	const json = ctx.response.json();
	ctx.expect(json).to.have.property('id');
});
```

## Example: post‑response
```javascript
ctx.test('status is 200', () => {
	ctx.expect(ctx.response.status).to.equal(200);
});

const token = ctx.response.json().token;
ctx.environment.set('authToken', token);
```

## Console output
Use `console.log`, `console.warn`, `console.error` to send output to the Console tab.
