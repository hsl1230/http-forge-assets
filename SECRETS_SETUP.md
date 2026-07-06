# Local Secrets Setup Guide

This folder contains HTTP Forge collections and test suites. To run tests or requests that require credentials and API tokens, follow these steps:

## 🔒 Secure Credentials Management

All secrets and credentials have been removed from the repository. To set up your local environment:

### 1. **For Environment Variables**

Create local environment files by copying the templates:

```bash
# Copy the demo-staging environment template
cp environments/demo-staging.json environments/demo-staging.local.json

# Copy the Postman environment template  
cp postman-exported-files/HTTP_Forge_Environment.postman_environment.json \
   postman-exported-files/HTTP_Forge_Environment.postman_environment.local.json
```

### 2. **Fill in Your Credentials**

Edit the `.local` files and replace the placeholder values with actual credentials:

**File:** `environments/demo-staging.local.json`
```json
{
  "variables": {
    "basic_user": "YOUR_ACTUAL_USERNAME",
    "basic_pass": "YOUR_ACTUAL_PASSWORD",
    "demo_token": "YOUR_JWT_TOKEN_HERE",
    "auth_username": "YOUR_AUTH_USERNAME",
    "auth_password": "YOUR_AUTH_PASSWORD"
  }
}
```

**File:** `postman-exported-files/HTTP_Forge_Environment.postman_environment.local.json`
```json
{
  "values": [
    {
      "key": "auth_token",
      "value": "YOUR_JWT_TOKEN_HERE",
      "type": "secret"
    },
    {
      "key": "username",
      "value": "YOUR_USERNAME_HERE",
      "type": "default"
    },
    {
      "key": "password",
      "value": "YOUR_PASSWORD_HERE",
      "type": "secret"
    }
  ]
}
```

### 3. **Use the `.local` Files**

When running tests or requests in HTTP Forge:
- Select your `.local` environment from the environment dropdown
- The variables from `.local` files will override the placeholder values
- **Note:** `.local` files are ignored by Git and will never be committed

## ✅ Safety Checklist

- ✅ `.local` files are in `.gitignore` — they will never be pushed
- ✅ Template files in repo contain placeholder values only
- ✅ Sensitive suite folders (`forgerock_login*`) are gitignored
- ✅ Shared histories are gitignored
- ✅ Postman files with credentials are gitignored

## 🚫 Never Commit

- Do NOT commit `.local` files
- Do NOT add real credentials to non-`.local` files
- Do NOT add tokens or passwords to collections or suites
- Always use variable placeholders like `{{VARIABLE_NAME}}`

## 📝 Variables as Placeholders

Instead of hardcoding secrets, use these placeholder patterns in requests:

| Placeholder | Purpose |
|---|---|
| `{{AUTH_USERNAME}}` | Authentication username |
| `{{AUTH_PASSWORD}}` | Authentication password |
| `{{DEMO_TOKEN}}` | JWT or API token |
| `{{BASIC_USER}}` | Basic auth username |
| `{{BASIC_PASS}}` | Basic auth password |
| `{{CLIENT_SECRET}}` | OAuth client secret |
| `{{API_KEY}}` | API key value |

Define the actual values in your `.local` environment file, and HTTP Forge will substitute them at runtime.

## 🔄 CI/CD Integration

For GitHub Actions or other CI/CD systems:
- Use GitHub Secrets to store credential values
- Pass them as environment variables during test runs
- Never commit `.local` files to any branch
