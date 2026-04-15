# Session CLI

Two commands that bookend a study session.

## Start a session

```bash
npm run study:start
```

Creates `content/journal/YYYY-MM-DD.md` (with frontmatter stub + `session started HH:MM`) if it doesn't exist, and opens it in `$EDITOR` (falls back to `$VISUAL`, then `code` on Windows, then `nano`). If today's file already exists (multi-session day), appends a fresh `session started HH:MM` line.

## End a session

```bash
npm run study:end
```

Prompts `what shipped today? (one line):`, appends `session ended HH:MM — <answer>` to today's file, then:

```
git add content/
git commit -m "study(phase-N): <answer>"
git push
```

Phase number `N` is read from `content/phases/*.md` — the file with `status: active` in frontmatter. Falls back to `1` if no phase is active.

If no git remote is configured (e.g. the repo hasn't been pushed to GitHub yet), the script skips the push step and prints a warning — the commit is still saved locally.

## Gotchas

- **Windows bash + VS Code**: requires `code` on PATH. If missing, open VS Code → Command Palette → "Install 'code' command in PATH".
- **Empty journal on study:end**: if you never ran `study:start`, the script exits with code 1. Run `study:start` first.
- **Nothing to commit**: if you made no changes under `content/` during the session, the commit step fails and exits with code 2. That's a feature — don't commit empty work.

## Edit $EDITOR preference

Set it in your shell profile:

```bash
export EDITOR="code --wait"
```
