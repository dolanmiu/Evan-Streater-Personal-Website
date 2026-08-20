# AGENTS.md

## Testing

- Write tests using React Testing Library.
- Only test the public interface. Do not export private members just to test them.
- If something is hard to test, first check if it's viable to split the component up into smaller, testable pieces.
- If testing a private member still requires too many hacks, use `/* v8 ignore next */` (or the appropriate v8 ignore comment) with an inline comment explaining why that coverage is being ignored.

## Styling

- Always use Tailwind for styles.

## Imports

- Use the `@/` path alias, which maps to the repo root.

## Spell checking

- cspell is configured; run it after adding new content or words.

## React

- Default to Server Components. Only add `"use client"` when interactivity requires it.
- Always create small, elegant, maintainable components.

## SEO

- Consider SEO when making changes; use the `seo-audit` skill for audits.
