# Updating Peregon reports

This repository is the `games/peregon/reports` submodule of
[EXEcutor](https://github.com/shsanek/EXEcutor), branch `claude/peregon-design`.
It contains the original HTML report and evidence archive, plus GitHub Markdown pages.
The generator and the report skill live in the parent repository.

## Initialize

From the EXEcutor root:

```sh
git submodule update --init games/peregon/reports
git -C games/peregon/reports switch main
git -C games/peregon/reports pull --ff-only origin main
```

Use Python 3.9+ and Node.js. No Python packages are required by the generator.
Opening `index.html` locally does not require either runtime.

## Author the two reports

1. Commit and integrate the game change before recording its source commit.
2. Add a `progress.js.entries` record with the integration commit from
   `claude/peregon-design`, date, time, title, outcome, actual checks and evidence.
3. Preserve existing evidence. Add new JPG captures under `shots/`; model previews
   use `shots/assets/<asset>/NN_<stage>.jpg`. Preserve every model step in `elements`.
4. Run `python3 games/peregon/tools/report.py --pending-changes` to list source
   commits after the previous changelog checkpoint. Inspect their diffs and reports.
5. Edit `changes.json`: chronological Russian day headings, `features` and `fixes`,
   one concise title per line, no implementation details. Include completed work
   only, consolidate duplicates, and preserve previous days. The initial list starts
   on Friday evening, 9 October 2026.
6. Only after reviewing the entire range, set `last_covered_commit` to the full
   40-character SHA of the last reviewed **EXEcutor** commit. Do not use a PeregonInfo
   commit. This marker is deliberately never advanced by the generator.

```sh
python3 games/peregon/tools/report.py
```

This refreshes the local HTML data, all Markdown pages, `changes.html`, and
`publication.json`. Use `--github-only` when the existing scene/model data is already
current. Do not edit generated Markdown or `changes.html` directly.

`README.md` links daily merge reports, model groups and the complete image gallery.
`CHANGELOG.md` is the second page and ends with the exact covered source commit.
`publication.json.source_commit` identifies the report build; its
`changes_covered_commit` separately identifies the reviewed changelog boundary.
Historical source files outside this repository link back to EXEcutor on GitHub.

## Verify and publish

```sh
python3 games/peregon/tools/test_report_github.py
git -C games/peregon/reports diff --check
git -C games/peregon/reports status --short
git -C games/peregon/reports add .
git -C games/peregon/reports commit -m "Update Peregon reports"
git -C games/peregon/reports push origin main
git add games/peregon/reports
git commit -m "Update Peregon report submodule"
git push origin claude/peregon-design
```

Push the child repository first, then the parent pointer. Review staged changes in
both repositories before committing. Use `git -C games/peregon/reports diff` for
report contents: the parent repository tracks only the submodule commit.
Keep game code, generated game assets and Rodin source models in EXEcutor; this
repository contains the report, previews and verification evidence.
