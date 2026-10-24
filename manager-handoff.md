# Peregon manager handoff — 2026-10-24 ~18:00

Stopped by the owner (moving to another machine). Design branch: `claude/peregon-design`, pushed tip **`171dde1ffb`**
(net protocol **104**). Every merged task has a Russian PeregonInfo entry; the changelog checkpoint is `c0689925de`.

## Owner rules in force

- Reply to the owner in Russian; agents, docs, commits in English. No code comments. Native macOS only.
- **Test suites are paused** (owner): build + stages + the play-test bot only. Many test expectations are outdated
  after 2026-10-23/24 (care rescue, woodcut, tech, build, bugs, swarm, stakes, combat2, cargo, net slots…).
- **Always 4 agents in parallel**, manager monitors on a 20-minute loop; fill a freed slot at once from the queue.
- **Commit a merge only after a green build** (never `build ; commit`). Bump `kNetProtocol` on every gameplay merge.
- Spawn agents from the EXEcutor root (never from `games/peregon/reports`, which is the PeregonInfo submodule).
- No redundant hints/tutorials; never tell the player where resources come from; book shows only buildable pieces.
- Every recipe input must have a renewable source (`tools/balance/deps.py --check`).
- Weapons/defences are Blender placeholders (no Tripo). Never pay.
- Progression reference: **Icarus** (docs/tech-research.md).
- Remove agent worktrees only after their branch is an ancestor of design (or pushed) and clean; keep >30 GB free.

## Unfinished agent branches (pushed, worktrees removed — each has a handoff with exact next steps)

| Task | Branch @ tip | Handoff | State |
|---|---|---|---|
| MUD | `claude/peregon-mud` @ 6747cb700d | docs/handoff-mud.md, docs/soil-voxels.md | analysis only. Next: (a) start meadow a bit firmer only there (wetness 9 in `map/regions/zarechye/paint/r6_north.json`), rescue drops on firm ground — commit alone; (b) fix endless mounds (`RutField::press` measures from untouched ground), remove/raise all dig-in depth caps, voxel soil/mud/snow with conservation + persistence of heights and composition; (c) voxel river water around the truck (hits the body, over the hood, drag/buoyancy/current) |
| HUT | `claude/peregon-hut` @ 1c292e68c8 | docs/handoff-hut.md | analysis only. Doorway ≥2 m (12 courses), stove not trapping (corner placement, exit check, doors swing away), roof where aimed, dismantle 5 s hold with proper refund + barrel back, site prompts not hidden |
| THREATS2 | `claude/peregon-threats2` @ 445d274f63 | docs/handoff-threats2.md | analysis only. Death keeps hunger/thirst; heart HP 250/600/950/1300; arrows hurt nests; pour 5 l kerosene/diesel; nests within ~2.5 km of the tent grow at ~35 % until day 4; bot attack check. Rucksack at the nest after death stays (owner) |
| TECHPACE | `claude/peregon-techpace` @ a7b64ea0bb | docs/handoff-techpace.md | WIP, **not compiled**: deps.py profile fixed, brushwood 4 per dead tree + crown armfuls. Next: build, stone chimney at Т-1, Т-2 ~200 with more xp per action, bot pacing before/after |

Start these four first (fresh agents from their branches; merge design into each first).

## Done 2026-10-23/24 (all merged into design)

TRUCKDMG, NEST2, NET6 docs, SWARM2–5, TRUCKMG, ARMS1, DEFENCE1, EARLY1–2, BUGFX, PT1–PT6, POLISH1–2, PTPOLISH,
D1–D5, WEAPONS-L, WORLD-L, PAR3, FORESTCOL, PLAYTEST1 + PLAYTEST2 (reports docs/playtest1-report.md,
docs/playtest2-report.md; bot `src/game/play/play_ptbot.*`, docs/handoff-playtest2.md).

PLAYTEST2 vs PLAYTEST1: 28 fixed, 5 partly, 6 still, 0 regressed, 7 not reached. Driving/Sawmill untested because
both start trucks sink in the camp meadow (→ MUD stage a).

## Next after the four

- PLAYTEST3 (only agent on a clean machine) once MUD (a), HUT, THREATS2, TECHPACE are merged — must cover driving,
  forest (FORESTCOL), hauling, Sawmill.
- Queue leftovers in manager-queue.md; owner-waiting: ICEPROBE, player models in Tripo, internet co-op test,
  «N — открыть блокнот» banner; blocked: TESTS-UPDATE, COOPAUDIT (tests paused).

## Notes

- 5 old worktrees from 10-07…10-10 (perfdll, w9b-cargo-flyout, s2-gunplay, r1b-veg-perf, region) have uncommitted
  changes — not ours, left alone.
- `games/peregon/assets/truck_hero/kolymaga_hero_baked.blend` is 52.75 MB (GitHub warns >50 MB).
- Map for builds: symlink `games/peregon/build/map/r1` to an existing r1 bake (don't regenerate unless asked).

## Restart prompt

```
You are the Peregon development manager (games/peregon, branch claude/peregon-design). Reply to the owner in Russian;
sub-agents, docs and commits in English. Read games/peregon/reports/manager-handoff.md first. Restart the four
unfinished tasks as fresh sub-agents (isolation worktree, spawned from the EXEcutor root) from their pushed branches
and handoffs: MUD (meadow first, then voxel soil/snow, then voxel river water), HUT, THREATS2, TECHPACE. Merge each
when done (build green before commit, protocol bump), write Russian PeregonInfo entries, log in
reports/manager-log.md, keep 4 agents running, 20-minute loop. Then propose PLAYTEST3. Rules: no code comments,
native macOS only, no test suites until the owner lifts it, never force-push, never pay, remove worktrees only after
verified merge, keep >30 GB free.
```
