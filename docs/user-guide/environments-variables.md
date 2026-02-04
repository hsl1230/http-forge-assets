# Environments & Variables

HTTP Forge supports multiple variable scopes to keep request data consistent across environments.

## Scopes
- **Globals**: workspace‑wide
- **Environment**: selected environment
- **Collection**: applies to requests in a collection
- **Session**: temporary values during the session

## Variable syntax
Use `{{variableName}}` anywhere:
- URL/path
- Params
- Query
- Headers
- Body
- Scripts

### Example
```
{{baseUrl}}/accounts/{{accountId}}
```

## Resolution order
When the same key exists at multiple scopes, the most specific value wins:
1. Session
2. Collection
3. Environment
4. Globals

## Environment selection
The environment dropdown controls:
- Variable resolution
- Default headers
- Environment‑specific credentials

## Local secrets
Store secrets in a gitignored file (for example, `http-forge.secrets.json`).
Reference them by name from environments or scripts.

### Folder layout example
```
http-forge/environments/
├── _global.json
├── _secrets.json
└── dev.json
```

_global.json
```json
{
	"variables": {
		"tenant": "TELUS",
		"locale": "ENG"
	},
	"defaultHeaders": {}
}
```

dev.json
```json
{
	"name": "dev",
	"variables": {
		"baseUrl": "http://localhost:3000"
	}
}
```

## Common patterns
- `baseUrl` per environment
- `apiKey` per environment
- `tenant`, `locale`, `region` variables

### Example environment file
```json
{
	"baseUrl": "https://api.example.com",
	"apiKey": "{{API_KEY}}",
	"tenant": "telus"
}
```

## Tips
- Keep variable names consistent across environments
- Prefer collection variables for per‑collection defaults
