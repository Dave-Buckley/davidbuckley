# Session CLI

Three commands that bookend a study session and give you a scratch surface in between.

## Start a session

```bash
npm run study:start
npm run study:start -- --phase 3        # override the active phase
npm run study:start -- --no-terminals    # skip terminal spawn
```

Creates `content/journal/YYYY-MM-DD.md` (with frontmatter stub + `session started HH:MM`) if it doesn't exist, and opens it in `$EDITOR` (falls back to `$VISUAL`, then `code` on Windows, then `nano`). If today's file already exists (multi-session day), appends a fresh `session started HH:MM` line.

Also spawns the terminals required for the active phase's work:

| Phase | Terminals spawned |
|-------|-------------------|
| 1 · Programming & CS Fundamentals | `python` REPL |
| 2 · Web Stack & First AI Products | `npm run dev` (portfolio dev server) |
| 3 · ML Fundamentals & Applied ML | `python` REPL |
| 4 · Deeper AI — RAG, Agents, Fine-tuning, MLOps | `python` REPL |
| 5 · Job Hunt & Landing | none |

Terminal spawning works on Windows (new `cmd` windows via `start`) and macOS (new Terminal tabs via `osascript`). On Linux it prints the recommended commands to run manually. Pass `--no-terminals` to skip.

## Sketchpad

```bash
npm run study:sketch
npm run study:sketch -- --phase 1   # force a Python sketch regardless of active phase
```

Creates a dated scratch file under `sketches/` and opens it in VS Code alongside the journal. The file extension matches the active phase's primary language: `.py` for Phases 1, 3, 4 (run with `python`), `.mjs` for Phase 2 (run with `node`), `.md` for Phase 5 (prep notes). Multiple sketches on the same day get suffixed (`-2`, `-3`, ...).

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
