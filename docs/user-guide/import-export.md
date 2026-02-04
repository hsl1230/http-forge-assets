# Import/Export & Postman Compatibility

## Import
You can import Postman collections (v2.1). Imported collections are saved under `storage.root/collections`.

## Export
Export collections to a Postman‑compatible format for sharing.

## Example
Export a collection to share with another team, then import it into their workspace.

## Compatibility notes
- Most Postman request structures are supported.
- Script API is Postman‑compatible via `pm`/`ctx` aliases.

## Tips
- Avoid duplicate request names inside a collection.
- Keep folder and request names stable for codegen.
