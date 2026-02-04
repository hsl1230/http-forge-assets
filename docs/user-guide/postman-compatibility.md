# Postman Compatibility Reference

This guide documents the Postman‑compatible script API available in HTTP Forge. It reflects the current implementation.

## Aliases
The same API is available through these aliases:
- `ctx`
- `pm`
- `agl`

## Pre‑request: request API
| Postman | HTTP Forge | Notes |
| --- | --- | --- |
| `pm.request.url` | `ctx.request.url` | get/set |
| `pm.request.method` | `ctx.request.method` | get/set |
| `pm.request.headers` | `ctx.request.headers` | object |
| `pm.request.body` | `ctx.request.body` | get/set |
| `pm.request.addHeader()` | `ctx.request.setHeader()` | name differs |
| `pm.request.removeHeader()` | `ctx.request.removeHeader()` | same |
| — | `ctx.request.params` | path params |
| — | `ctx.request.query` | query params |

## Variables
| Postman | HTTP Forge | Notes |
| --- | --- | --- |
| `pm.variables.*` | `ctx.variables.*` | session scope |
| `pm.environment.*` | `ctx.environment.*` | environment scope |
| `pm.collectionVariables.*` | `ctx.collectionVariables.*` | collection scope |
| `pm.globals.*` | `ctx.globals.*` | workspace scope |

Supported methods: `get`, `set`, `has`, `unset`, `clear`, `toObject`.

## Post‑response: response API
| Postman | HTTP Forge | Notes |
| --- | --- | --- |
| `pm.response.code` | `ctx.response.status` | status code |
| `pm.response.status` | `ctx.response.status` | status code |
| `pm.response.reason()` | `ctx.response.statusText` | status text |
| `pm.response.headers` | `ctx.response.headers` | headers object |
| `pm.response.body` | `ctx.response.body` | body string |
| `pm.response.json()` | `ctx.response.json()` | parse JSON |
| `pm.response.text()` | `ctx.response.text()` | body as text |
| `pm.response.responseTime` | `ctx.response.responseTime` | time (ms) |
| — | `ctx.response.cookies` | cookies object |
| — | `ctx.response.cookie(name)` | get cookie |
| — | `ctx.response.hasCookie(name)` | check cookie |

## Tests and assertions
| Postman | HTTP Forge |
| --- | --- |
| `pm.test(name, fn)` | `ctx.test(name, fn)` |
| `pm.expect(value)` | `ctx.expect(value)` |

Common assertions:
- `.to.equal()` / `.to.eql()`
- `.to.have.property()`
- `.to.include()`
- `.to.match()`
- `.to.be.ok()`
- `.to.be.true` / `.to.be.false`
- `.to.have.status()` via `ctx.response.to.have.status()`
- `.to.have.header()` via `ctx.response.to.have.header()`
- `.to.have.jsonBody()` via `ctx.response.to.have.jsonBody()`

## Send requests from scripts
`pm.sendRequest()` is supported as `ctx.sendRequest()`.

Example:
```javascript
ctx.sendRequest({
  url: '{{baseUrl}}/status',
  method: 'GET'
}, (err, res) => {
  if (err) return console.error(err);
  console.log(res.status);
});
```

## Example: Postman‑style script
```javascript
pm.test('status is 200', () => {
  pm.expect(pm.response.status).to.equal(200);
});

const token = pm.response.json().token;
pm.environment.set('authToken', token);
```

## Notes
- Request auth is configured in the UI; scripts can add headers as needed.
- Cookies are handled automatically and exposed via `ctx.response.cookies`.
- Iteration data APIs are not fully implemented.
