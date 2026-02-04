# HTTP Forge vs Postman

This document compares HTTP Forge (VS Code‑native) and Postman (standalone app) from a practical user perspective.

## Summary
- **HTTP Forge** is optimized for developer workflows inside VS Code, with collections as files in your repo, strong scripting compatibility, and test suites integrated with your codebase.
- **Postman** is a standalone platform with broader collaboration, cloud sync, and enterprise tooling.

## Feature comparison
| Area | HTTP Forge | Postman |
| --- | --- | --- |
| Editor integration | Native VS Code extension | Separate desktop/web app |
| Collections storage | Files in repo (`storage.root/collections`) | App/workspace storage (cloud/local) |
| Environments | Folder-based JSON files in repo: _global.json for globals + defaultHeaders, per-env files for variables, _secrets.json for local-only secrets/credentials; supports session variables and per-env selection | App environments + secret management |
| History | Local history + shared history in repo | Local history, cloud history |
| Scripts | Postman‑compatible (`ctx`/`pm`/`agl`) | Native Postman scripting |
| Request builder | Params/headers/body/auth/tabs | Params/headers/body/auth/tabs |
| Path params | Express.js patterns + `{{var}}` | Path variables |
| Import/Export | Postman v2.1 compatible | Native Postman format |
| Public API | VS Code extension API to create collections/requests programmatically | Limited to Postman platform integrations |
| Test suites | Suite runner + stats (P50/P90/P95/P99) | Collection runner + monitors |
| Codegen | Built‑in codegen package | Codegen via Postman tools |
| Playwright | First‑class integration packages | External integration required |
| CI usage | CLI/standalone runner | Newman / Postman CLI |
| Collaboration | Git‑based workflows | Cloud workspaces, team features |

## Workflow differences
### HTTP Forge
- Collections and environments are versioned alongside code.
- Fits git‑based reviews and branch workflows.
- Uses VS Code UI with Request Tester and history sidebar.

### Postman
- Collections live in Postman workspaces with cloud sync.
- Strong UI for sharing and collaboration outside git.

## When to choose HTTP Forge
- You want requests, environments, and suites versioned in git.
- You prefer working inside VS Code.
- You need tight integration with Playwright or codegen.

## When to choose Postman
- You need extensive collaboration features out of the box.
- You want cloud workspaces, monitors, and API hubs.
- Your team is already standardized on Postman.

## Compatibility notes
- HTTP Forge provides Postman‑compatible scripting and collection import.
- Some advanced Postman features (monitors, mock servers) are not in HTTP Forge.

## Related docs
- Postman compatibility reference: postman-compatibility.md
- Import/export guide: import-export.md
- Codegen guide: codegen.md
- Playwright integration: playwright.md
