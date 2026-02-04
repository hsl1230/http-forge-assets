# HTTP Forge Assets

Sample collections, environments, and test suites for [HTTP Forge](https://marketplace.visualstudio.com/items?itemName=hsl1230.http-forge) - a powerful API testing extension for Visual Studio Code.

## 📁 Repository Structure

```
http-forge-assets/
├── collections/           # Sample API request collections
│   └── httpbintestcollection/
│       ├── advancedfeaturestests/    # Status codes, redirects, delays
│       ├── authenticationtests/       # Basic auth, Bearer token
│       ├── collectionlevelscripts/    # Pre-request & post-response scripts
│       ├── dynamicscripttests/        # Dynamic request modifications
│       └── httpmethodstests/          # GET, POST, PUT, PATCH, DELETE
├── environments/          # Environment configurations
│   ├── _global.json       # Global variables
│   └── test.json          # Test environment variables
├── suites/                # Test suite definitions
└── postman-exported-files/ # Postman import/export examples
```

## 🚀 Getting Started

1. Install [HTTP Forge](https://marketplace.visualstudio.com/items?itemName=hsl1230.http-forge) in VS Code
2. Clone this repository:
   ```bash
   git clone https://github.com/hsl1230/http-forge-assets.git
   ```
3. Open the folder in VS Code
4. HTTP Forge will automatically detect the collections and environments

## 📚 What's Included

### Collections

- **HTTP Methods Tests** - Examples of GET, POST, PUT, PATCH, DELETE requests
- **Authentication Tests** - Basic Auth and Bearer Token authentication
- **Advanced Features** - Custom headers, form data, status code testing, redirects
- **Script Examples** - Pre-request and post-response JavaScript scripts
- **Collection-Level Scripts** - Scripts that run for all requests in a collection

### Environments

- **Global** - Variables shared across all environments
- **Test** - Environment-specific variables for testing against httpbin.org

### Test Suites

- Pre-configured test suites for automated API testing

### Postman Compatibility

- Example files showing Postman collection/environment import and export

## 🔗 Related Links

- [HTTP Forge Extension](https://marketplace.visualstudio.com/items?itemName=hsl1230.http-forge)
- [HTTP Forge Documentation](./docs/user-guide/index.md)
- [Report Issues](https://github.com/hsl1230/http-forge/issues)

## 📄 License

MIT License - feel free to use these samples as templates for your own API testing projects.
