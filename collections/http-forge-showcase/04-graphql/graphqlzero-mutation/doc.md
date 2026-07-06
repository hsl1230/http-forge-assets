# GraphQLZero — Mutation & Fetch Schema Demo

This request demonstrates two features together:

## 1. GraphQL Mutations

Unlike the other GraphQL requests in this collection (which run queries),
this request runs a **mutation** (`createPost`) against the
[GraphQLZero](https://graphqlzero.almansi.me) API — a free, publicly
accessible GraphQL API backed by JSONPlaceholder data.

The mutation accepts typed input (`CreatePostInput!`), returns nested
objects (`post.user.id`), and uses a GraphQL variable (`$input`) so you
can see variable substitution in action.

## 2. Fetch Schema (schema-driven autocompletion)

Because `createPost` requires a specific input shape, this is the ideal
request to demonstrate HTTP Forge's **Fetch Schema** feature:

1. Open this request in HTTP Forge.
2. Select the **Body** tab — it should show **GraphQL** mode.
3. Click the **Fetch Schema** button (top-right of the Body editor).
4. HTTP Forge sends a standard GraphQL introspection query to
   `{{graphqlzero_url}}` using the request's current headers.
5. Once the schema loads you get:
   - Field autocomplete inside the selection set (`{ id title body ... }`)
   - Argument name + type hints (`input: CreatePostInput!`)
   - Inline documentation for every type and field
   - Variable type validation (`$input: CreatePostInput!`)

> **Tip:** Try clearing the query body, typing `mutation {` and pressing
> `Ctrl+Space` to see all available mutations autocompleted from the live schema.
