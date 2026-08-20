---
name: release
description: Commit work to the default branch using Conventional Commits and push it to trigger a production deploy on Vercel. Use when the user asks to release, deploy, ship, publish, commit and push, or push to main. Runs fmt, lint, build, test, and cspell checks plus a live smoke test of the running production site before committing. Use ONLY for this repo's release flow.
---

# Release

Pushing to the default branch (`main`) triggers an immediate production deploy on
Vercel. A single failing check breaks the live site. This skill never cuts corners:
every check must pass and the running site must be smoke-tested before anything is
committed or pushed.

## Before you start

1. Confirm you are on the default branch:
   - `git branch --show-current` must be `main` (verify with `git remote show origin`
     if unsure which branch is the default).
   - If not on `main`, abort and tell the user. Do not switch branches without asking.
2. Review exactly what will ship:
   - Run `git status` and `git diff` (and `git diff --cached` for staged changes).
   - Confirm only intended files are changed and no secrets, `.env*`, build output, or
     lockfile noise is staged.
3. If anything is unexpected, stop and ask the user before continuing.

## Mandatory check pipeline

Run each in order. Any failure stops the release. Do not continue past a failing step.

1. **Format** — `npm run fmt:check` (oxfmt). If it fails, apply `npm run fmt` and review
   the result, then re-run the check.
2. **Lint** — `npm run lint` (eslint). Fix every error.
3. **Build** — `npm run build` (next build). Next build also performs TypeScript
   type-checking, so a green build covers typecheck. It must complete successfully.
4. **Tests** — `npm run test` (vitest with coverage). All tests must pass.
5. **Spell check** — `npm run spellcheck` (cspell). Fix misspellings; add a word to the
   cspell dictionary only when it is genuinely correct.

### If a check fails

- Fix the root cause. Do not silence a check (`// eslint-disable`, `/* v8 ignore */`,
  blanket dictionary additions) unless the suppression is genuinely correct and you can
  justify it.
- Re-run the failed check (and anything that depends on it) until green.
- If the failure is pre-existing and unrelated to your change, still fix or flag it —
  pushing a red build breaks the site.

## Live smoke test

Vercel deploys the production build, so test `next start`, never `next dev`.

1. Start the production server in the background:
   - `npm run start > /tmp/release-next.log 2>&1 &`
   - Default port is 3000.
2. Wait until it responds 200 (poll every ~2s, short timeout):
   - `curl -sS -o /dev/null -w "%{http_code}" http://localhost:3000`
3. Sanity-check every route. The site has `/`, `/about`, `/concerts`, `/recordings`,
   `/contact`:
   - Assert HTTP 200 for each:
     `curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:3000/about`
   - Fetch the homepage and confirm it contains real content, not an error or blank
     shell: `curl -sS http://localhost:3000 | rg -i "Evan"` (or another expected string
     from the page).
   - Scan the server log for problems:
     `rg -i "error|exception|failed" /tmp/release-next.log`
4. Stop the server: `kill %1`, then confirm the port is free.
5. If any smoke test fails, stop the release and fix the problem.

## Commit (Conventional Commits)

Format: `<type>(<scope>): <description>`, e.g. `feat(about): add bio`,
`fix(home): correct heading`, `chore: update deps`. Valid types: `feat`, `fix`,
`refactor`, `perf`, `chore`, `docs`, `test`, `style`, `build`, `ci`, `revert`.

1. Choose the type from the change. If the message or type is not obvious, ask the user.
2. Stage only intended files: `git add <specific files>`. Never use `git add -A`
   without first reviewing what it would stage.
3. Commit with a short subject: `git commit -m "type(scope): description"`, or subject
   plus body via a second `-m` for larger changes.
4. Never use `--amend`, `--no-verify`, or interactive staging.

## Push

1. Push to the default branch: `git push origin main` (use the confirmed default name).
2. Verify the push succeeded: `git status` shows no outgoing commits and
   `git log origin/main..main` is empty.
3. Never force-push. Never push to another branch.
4. The push triggers Vercel's production deploy automatically. If the `vercel` CLI is
   available you may check `vercel ls` / `vercel logs`, but do not block on it.

## Definition of done

- [ ] On `main`; working tree contains only reviewed, intended changes
- [ ] `npm run fmt:check` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes (includes typecheck)
- [ ] `npm run test` passes
- [ ] `npm run spellcheck` passes
- [ ] Production server smoke-tested on all routes; no errors in logs
- [ ] Conventional commit created
- [ ] Pushed to `origin/main`; Vercel deploy triggered