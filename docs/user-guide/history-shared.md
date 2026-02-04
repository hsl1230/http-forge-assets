# History & Shared History

## Local history
Every request execution is saved to `storage.history`.

## Shared history
You can share a history entry and tag it. Shared history is stored under:
`storage.root/shared-histories`

## Features
- Grouped by ticket/branch or shared tag
- Click an entry to restore
- Delete individual entries
- Rename shared groups
- Move shared entries to another group

## Example
Shared group name: `release-2026-01`

## Typical workflow
1. Send a request to create a history entry.
2. Click the history entry to restore it.
3. Use the share button to move the entry to shared history.
4. Use the move button on a shared entry to change its shared group.
5. Rename the shared group from the group header.

## Notes
- Shared history is meant for collaboration and can be committed if desired.
- Local history is usually gitignored.
