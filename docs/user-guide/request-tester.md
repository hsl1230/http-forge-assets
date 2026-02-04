# Request Tester

The Request Tester is the main UI for building and executing requests from the extension.

## Request line
- **Method**: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
- **Path/URL**: Absolute URL or relative path resolved against environment variables (supports Express.js route patterns like `:id`)
- **Send**: Executes the request
- **Save**: Saves updates back to the collection

### Example
```
GET {{baseUrl}}/users/:id
```

## Params tab
### Path params
- Automatically detected from `:param` or `{{param}}` patterns
- Values can be literals or `{{variables}}`

### Query params
- Each row includes an enable/disable checkbox
- Disabled rows are ignored without removing them

Example:
```
include = profile
limit = 10
```

## Authorization tab
- **Inherit**: Uses environment or collection auth
- **Bearer**: Token value for Bearer authentication
- **Basic**: Username and password for Basic authentication  
- **API Key**: Key/value pair, sent in header or query parameter
- **None**: No authentication

Auth settings are properly inherited when running requests in Test Suites.

## Headers tab
- Add/remove headers
- Enable/disable each header row
- Supports `{{variables}}`

## Body tab
- **JSON**: Monaco editor with formatting
- **form-data**: key/value rows + file input
- **Raw**: plain text
- **None**

Example JSON body:
```json
{
	"name": "Test User",
	"email": "test@example.com"
}
```

## Scripts tab
- Pre‑request and Post‑response scripts
- Script templates are available

See: scripts-assertions.md

## Settings tab
- Timeout
- Follow redirects
- Follow original method on redirect
- Follow auth header on redirect
- Max redirects
- Strict SSL
- Decompression

## Send execution flow
1. Resolve environment variables
2. Apply environment headers
3. Run pre‑request script
4. Send HTTP request
5. Run post‑response script
6. Save history entry
7. Render response and tests

## Response viewer
- Status, time, size
- Body (formatted JSON/XML/HTML)
- Headers and cookies tables
- Tests tab with pass/fail summary
- Console tab for script logs

## History
See: history-shared.md
