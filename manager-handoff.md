# Peregon manager handoff — 2026-10-23 ~16:10

Stopped on the owner's order (usage limit). Design branch: `claude/peregon-design`.

## State of design
- Pushed tip: `787fc8897e` Merge NET6/NET4abc (protocol 76). Play-test build = this.
- In progress in the main worktree (uncommitted merge): TRUCKDMG `c6e3463ea5` merged with `--no-commit`, clean, `kNetProtocol` bumped to 77. Verify: `bash $S/tdmg.sh` (output `$S/tdmg.out`; suites truckdmg, crafting, coop_audit, net_world, coopsweep, swarm_play, bugs_play, trucks_play). If green: check `git diff --cached --quiet reports`, commit "Merge TRUCKDMG ...", push. If not finished/unknown: rerun the script first.
- `S=/private/tmp/claude-501/-Users-alex--superset-worktrees-EXEcutor-capricious-buckthorn-2906c1e8/b826acff-2ccc-4929-a151-bdd6e0e01d4e/scratchpad` (may be gone after reboot; pattern: cmake --preset native-release, build targets, run `build/native-release/bin/<suite>` with `PEREGON_MAP_DIR=$(cd ../map/r1 && pwd)`).

## Agent branches (worktrees under /Users/alex/Downloads/winwin/EXEcutor/.claude/worktrees/agent-<id>)
| Task | Branch | State | Handoff |
|---|---|---|---|
| NET6 | claude/peregon-net6 | code merged (787fc8897e); net6fix matrix rerun interrupted; docs/baseline not committed to design | docs/handoff-net6.md on branch |
| TRUCKDMG | claude/peregon-truckdmg | done, `c6e3463ea5`, merge pending verify (above) | docs/truck_damage.md, playtest §48 |
| NEST2 | claude/peregon-nest2 | Tripo nest kit, defence, creep fix (`fc5e643f41`+); co-op suites were running | docs/handoff-nest2.md on branch |
| SWARM2 | claude/peregon-swarm2 | commander + nav field, game splice; owner asked a TOP-DOWN battle video with commander overlays (roles, routes, influence map, plan labels; land base + base behind water/ice) | docs/handoff-swarm2.md on branch |

Numbering: protocol next free 78. Save sections NEST2 460–469, SWARM2 470–479, TRUCKDMG 480–489. Message ids NEST2 90–99, SWARM2 100–109. Net chunk SWARM2 71, truck chunk 9 (TRUCKDMG). Playtest next free §49.

## Merge order next
1. Finish TRUCKDMG merge (above), push, report entry.
2. NEST2 (expect conflicts in play_swarm.cpp / coop_audit_tests.cpp / playtest.md).
3. SWARM2 after its top-down video.
4. NET6 docs commit only.
After each verified merge: remove the worktree only per the cleanup rule (ancestor check, tests green, clean tree, copy out/ and design/art-src/gen).

## Report backlog (PeregonInfo, games/peregon/reports)
Entries not written yet: FIXMERGE, BUGANIM (shots/buganim), HIVES, NET6, TRUCKDMG (shots in agent out/truckdmg). Bug animation videos in reports/anim/ (42 MB) not committed — owner never answered whether to publish.

## Backlog after
Owner play-test notes (play-test not started yet); bug sounds/loot/fear/xp; flamethrower + creep damage; player models in Tripo (needs owner yes, concepts in reports/shots/players); TESTFIX leftovers (tow winch slide 1.69 m, shaderc grass_card vs_2_0 13 temps, render_checks unbound registers); balance at ×1; loot rows; PAR-C2/N2/R2; internet test with Tallinn; TRUCKDMG leftovers (mirrors mesh, smaller bites, fire scorch, door-gap dents).
Open owner questions: BA-8 tree pace, Q-FEAR cab, Q-HUT −23 °C, Q-RAIN, spare wheel, layered forest.

## Restart prompt
```
You are the Peregon development manager (games/peregon in /Users/alex/.superset/worktrees/EXEcutor/capricious-buckthorn-2906c1e8, branch claude/peregon-design). Reply to the owner in Russian; sub-agents, docs and commits in English. Read games/peregon/reports/manager-handoff.md first, then the agent handoffs on claude/peregon-net6, claude/peregon-nest2, claude/peregon-swarm2. Do in order: finish the TRUCKDMG merge (verify build + touched suites, then commit/push), merge NEST2, then restart SWARM2 as a fresh Claude sub-agent (isolation worktree, spawned from the repo root) from its branch and handoff to make the owner's top-down commander video, then merge it; merge NET6 docs. Write PeregonInfo report entries for every merge and the backlog listed in the handoff. Log each step in reports/manager-log.md, run a 20-minute loop. Rules: no code comments, native macOS only, never force-push, never pay/type passwords, remove worktrees only after verified merge, watch free disk (>30 GB).
```
