# Peregon manager handoff (2026-10-12)

## Owner-requested stop: COOP48 (2026-10-11)

The owner explicitly asked to stop at a logical checkpoint. This overrides the historical autonomous-manager loop below. Do not resume the audit until requested.
Gameplay commit `6977ac2b43` is on `work/peregon-coop-audit`, after merging mainline Windows fixes (`2a18213826`). Movement queue/animation, four fitted sitting poses, seated-only backpack/gun hiding, host clock/weather, separate private/shared care and tiled glass updates are implemented. Four selected targets pass (76 scenarios / 24,740 assertions); two native clients converge 21/21 under impaired relay. Protocol 5 requires matching rebuilt peers; no live Steam Mac/Windows certification or repackaged ZIP here.
Canonical evidence: `reports/index.html`, COOP48 card, catalog row annotations, `reports/shots/coop48/verification.txt`. Remaining work: full mechanics matrix, client screens, N8 driver prediction, N9 sleep/reconnect and actual cross-platform Steam play. Four-person cabin rendering still needs live review beyond the mesh-envelope checks.


You are the MANAGER of the game "Peregon" (games/peregon/ in the EXEcutor repo). You do not write game code
yourself: you start Claude sub-agents (Agent tool, `isolation: "worktree"`, run in background), merge their
results onto `claude/peregon-design`, keep the report and queue up to date, and push. Reply to the owner in
Russian, short; agents/docs/commits in English.

## Hard limits (owner, 2026-10-12)
- **Normally at most 2 agents in parallel. Owner explicitly authorized TK7 as the third worker on 2026-10-11; this is a scoped exception for the current batch.**
- **Sleep between ticks**: run a 20-minute self-paced loop (ScheduleWakeup ~1200 s, or a cron `7,27,47 * * * *`);
  between ticks do nothing; on each tick check agents, merge finished work, start the next queued task if a slot
  is free, then go back to sleep. Agent completion notifications also wake you.
- Economise tokens: short briefs, short reports.
- Native build only (`cmake --preset native-release`, macOS Metal); win32/EXEcutor build untouched.
- Ask the owner only about money/purchases/logins; decide everything else yourself.
- The owner will NOT test: agents validate with native shots, tests and (co-op) 2–4 local low-settings clients.
- Truck model changes only in the owner's live Blender session via the Blender MCP, saved as a new numbered stage
  (latest: `assets/truck_wb/stage40_cabin_fit_authoring.blend` + `_baked`).
- Model generation: `peregon-art` skill (~/.claude-work/skills/peregon-art/), Chrome profile `~/.peregon-chrome.sh`
  (CDP 9222). Balances: Tripo 645 cr, Rodin 40.5 cr. One service per asset, no duplicates; owner approves Tripo spends
  case by case (clothing and the boat are NOT to be generated).
- Owner resumed co-op in the current 2026-10-11 session: W3 (N6+N7) is implemented, merged and manager-validated (68/68). W4–W5 remain ON HOLD pending a new command.

## Merge procedure (per finished agent branch `work/peregon-NAME`)
1. `zsh games/peregon/tools/manager/merge_branch.sh work/peregon-NAME` — cherry-picks linearly, auto-resolves
   report/doc conflicts (union + comma fix). Exit 2 = code conflict: `git cherry-pick --abort`, then SendMessage the
   agent (or a fresh agent) to rebase onto the latest `origin/claude/peregon-design` and force-push.
2. If the map sources changed (tools/map, map/): `games/peregon/tools/map/r1_fresh.sh` (bakes R1+R2+R3, ~10 min,
   background) — it also regenerates the paper map.
3. `zsh games/peregon/tools/manager/check.sh` — reconfigure, build, `ctest --preset native-release -j3` (66 tests;
   all play tests run under ctest since CT1). Known load flakes: timeouts under heavy load → `ctest --rerun-failed`.
4. `python3 games/peregon/tools/report.py`, update `reports/manager-queue.md` (status column) and one line in
   `reports/manager-log.md`, commit (end commit messages with the Co-Authored-By line), `git pull --rebase`,
   `git push origin claude/peregon-design`.
5. `git worktree remove -f -f <agent worktree>`; keep >60 GB free (big temp copies live in /private/tmp/claude-501).

Agent brief template essentials: own worktree branch from `origin/claude/peregon-design`; push its branch; never
commit to claude/peregon-design or reports/manager-*.md; native only; no code comments; no foreground command
>8 min; never copy whole bin/build dirs; copy build/map/r1 from the manager checkout; progress entry in
reports/progress.js (stage name); docs with the standard status tables; native shots in reports/shots/<id>/.

## State right now
MECH47: owner asked to collect the complete mechanics list first, before continuing the global co-op work. The canonical HTML now has a searchable 32-group / 394-row inventory (4221e7beee), sources and per-subsystem actor/observer expectations. All full network scenarios start unaccepted; code presence and the earlier aggregate COOP46 checks are not a pass. See `reports/index.html#mechanics` and `docs/mechanics-inventory.md`. No new gameplay runs or fixes were made for the inventory.

BREECH45 is pushed at dd3dd60165 on `claude/peregon-design`: modeled breech/chambers in all weapon LODs, native reload inspected. COOP46 is pushed at 6444ace6b4 on the separate `work/peregon-coop-audit` branch, not merged into the design branch. The owner requested a global actor/observer audit; the first repair pass is complete, with 9 selected targets / 75 scenarios passing and two actual Metal processes under 100 ms / 2% loss converging. Remaining gates and the full mechanics matrix are in `docs/coop-audit.md`. Both commits now have cards and screenshots in `reports/index.html` through `progress.js`. The distributable Steam ZIP has not been repackaged for these two commits.

MENU42 is implemented at 020495dc3a: Steam host/join/friends/invite buttons, mouse and keyboard lobby ID input, cancel/disconnect and localized error return to the menu. Native-release in the parent checkout now has Steam enabled with the external SDK 1.65. New kit `dist/Peregon-steam480-menu42-macos.zip` in the parent includes CABIN40 + INTERACT41 + MENU42 and a single `Peregon.command` launcher. One menu scenario passed (15 checks), native game/headless build and package loader passed; two native menu screenshots reviewed. No full suite and no live Steam two-account success claimed. Evidence: `reports/shots/menu42/verification.json`. No workers active.

UI43 is implemented at d60500eb7a: consistent W/S directions, physical Win32 letter/number controls, inventory cursor across modal menus, clickable closes, wheel lists, cargo click-to-place and modal input isolation. Native game/headless build passed; the focused net_menu_tests suite passed 3/3 scenarios (44 checks). Win32 input translation unit syntax-checked only. Full gameplay matrix and live Windows/Steam multiplayer were not rerun, per owner request for minimal checks. Updated kit: `dist/Peregon-steam480-ui43-macos.zip`; loader passed. Evidence: `reports/shots/ui43/verification.json`.

RACK44 implemented at 1b6f3e773a: four flat transverse shotguns in successive roof cradles. Live Blender source is now `assets/truck_wb/stage41_crew_roof_rack_authoring.blend`; canonical bake/runtime updated (125 parts / 76,394 triangles). Four owners, exact gun triangle picking, return to empty slots, disconnect, snapshot and save-v1 migration are implemented. Minimum ceiling gap 11.53 mm, no cabin/weapon/cradle overlaps. Native game/headless build and one focused scenario (57 checks) passed; source overview and native closeup reviewed. Full suite/live Steam not rerun. Updated kit: `dist/Peregon-steam480-rack44-macos.zip`; loader passed. Evidence: `reports/shots/rack44/verification.json`.

### Previous interaction batch
INTERACT41 is committed at 528810e4ba: outside map access through the exact exposed mesh, removal of sill auto-step, pallet/bed target consistency, E/left-click primary and F/right-click secondary cabin actions, safe overturned escape and stamina-based physical rocking. Existing scripted enter/exit input is retained without a physical F binding. All three targeted scenarios pass (68 checks total), including both cargo inspection steps and settled recovery from side/roof; native game and headless builds pass. No broad suite was run. Evidence: `reports/shots/interaction41/verification.json`. Source model remains stage40. No active workers. The Steam ZIP still contains the earlier 02c73e2589 code/assets; this gameplay follow-up has not been repackaged into it.

### Previous cabin and Steam batch
CABIN40 is committed at c119db429c and the optional Steam480 transport is merged at 02c73e2589. Stage40 fixes the dashboard/pillar fit, the exposed glass tip, toggle-panel placement and baked switch textures. It adds per-pane passenger side-glass wiping, four-door/window climate accounting, a 512-square progressive wiper mask, seat-specific exit paths and two invisible rear-wheel cargo inspection steps. Live Blender is saved as stage40 with four doors open; earlier stages remain intact. Native panel/corner screenshots are in `reports/shots/cabin40/game/`; three targeted scenarios pass (64 checks total). No full suite was run. The owner explicitly requests minimum checks; that overrides the older general merge/check procedure below. Commit, push and the existing report are authorized.

Steam480 uses optional SteamNetworkingSockets, four-person friends-only lobbies and existing world replication. Ordinary builds remain SDK-free. Steam agent /root/steam480 completed the refreshed Mac friend kit in isolated worktree `peregon-steam480` from merge 02c73e2589. The ZIP is `games/peregon/dist/Peregon-steam480-macos.zip` in that worktree (327,387,397 bytes); both Steam-enabled executables and the package loader pass with cabin40. No additional test suites were run and no active workers remain. SDK-enabled native builds, SDK-free transport smoke, Windows transport compile/link and package loading have passed. Actual lobby/SDR gameplay across two signed-in Steam clients has not been verified because no running/discoverable client was available. See `docs/steam-coop.md`. No further workers or held W4/W5 work are authorized by this batch.

### Earlier crew-cab integration
CREW39 is integrated at a27ee0f6d8: four-seat cabin, matching four-door geometry, single welded driver tank, manual open-door entry, same-row free-seat changes, driver-only motion controls, and current-geometry depth picking. The inactive model battery is removed and the separate working battery retained. Follow-up: both tool mount definitions now follow the bed by 0.66 m, with shared render/interaction positions; the cargo grid had already moved by the same amount. Rebuild both peregon and peregon_headless for the normal game launch. Live Blender is saved as stage39 with all four doors open; stage38 remains the original two-seat source. Final assets have 122 runtime parts and 74,502 triangles. Evidence and earlier checks: `reports/shots/crew39/verification.json`. The last model change received only export validation, an incremental native build and the battery remove/save/refit scenario (1/1, 24 checks); the owner requested minimal checks, so do not repeat the full suite. The owner authorized commit, push and report publication. No active workers.

### Previous completed batch
All authorized work is implemented; no active workers. TK7 final stage38 merged (9da22a2e60,7c928f7bae). Agent native build +5focused tests/90checks passed; source/baked door/lid sweeps and manager visual review passed. Owner explicitly ordered finish immediately and stop the repeated general validation; final manager full-suite rerun was interrupted, not claimed passed. Prior combined W3/MAPSTREAM2 manager suite68/68passed. Final report regeneration completed before termination was needed; progress entries and ordering were updated.
TK7: inset1.320x0.490m base/flat top,+100mm cushion/seams, only lower door handles,324mm locker opening expanded away from fixed pillar edge, working passenger hatch sharing storage,247mm sills/extended strips, fresh1K instruments/wheel atlas. Worker source branch work/peregon-truck-tk7 tip5a6997a5d9.
Live Blender safely opened manager assets/truck_wb/stage38_base_inset_authoring.blend, clean; viewport preserved, no worker image/library dependencies or NULL cabin materials. Worker checkout may now be removed; canonical Blender dependencies were verified. All remaining co-op W4/W5 are paused; do not launch more work without owner command.
MAPSTREAM2 and W3 merged and validated together: native build and68/68ctest PASS, report regenerated:
- MAPSTREAM2 main commits8bd1aa24e7/406d0a562d: automatic ownership from generated POI positions/map power endpoints, per-tile render lifecycle including GPU release; sim/site/nav/collision state remains global. Agent67/67,38 visual pairs, night/revisit/capacity regressions pass. Original first ford run had4 frames>16.7ms; unchanged repeat0, both documented.
- W3 main commits13761911d1/23f8cabbad/64327289be/46d918e6ee: N6 seats/N7 client play + owner shared-vehicle jitter correction, MTA source study. Agent68/68,13 identical single-player replays, walk/ride/ride4/relay/window4 gates all PASS. W3 Claude233d5b6d stopped. Still no client-driver prediction (N8), client HUD/screens (N7a) or remote carry/use poses (N7b); long packet/frame stalls can exhaust interpolation buffer and jump (max0.304m ride,0.8m window4).
MAPSTREAM1 core already published (a2cb086248/d420e90ce0): manager native build,65/67 +2 timeout reruns pass, shadow cache rebuilt. MAPSTREAM1 worker checkout removed. TK6/TK6b stages35/36 already published, its worker checkout removed safely before TK7 started.
W4/W5 remain ON HOLD. No new backlog workers outside this owner batch. New workers use Astra; normally max2, earlier third TK7 was explicitly authorized.
Manager checks every20minutes and sleeps between ticks. Superset CLI is unauthenticated; W3 used existing Claude background CLI, Astra workers use collaboration tools in manually isolated worktrees. Briefs/refs/logs: `/private/tmp/peregon-manager-20261011/`. Do not restart completed workers unless a concrete review requires it. For old Claude sessions inspect `claude agents --json --all` / transcripts under `~/.claude/projects/`; stop completed CLI session before resume without overrides to avoid copies.

## Done (all merged on claude/peregon-design, see reports/index.html)
Dash toggle panel (TK4) and tyre-valve card + choke pull knob (TK5); paper atlas map (PM1) → one sheet, deep zoom,
legend column, pencil «ты» 100 m + area loop, remembered view, auto-regeneration (PM2); co-op plan + N0 (world in
sim, layer hashes) + N1 (ENet/LZ4, relay on executor32.com:27650, friend kit) + N2 (join snapshot, layer deltas,
spectator); water: swimming/fishing/ice auger/boat (WT1), boat fix (WT2), boat look (WT3); truck physics (VH1), mud
passability + tyre pressure (VH2), load squat/cab eye/fog (VH3); rivers (RV1, RV2); shadows (SH3); loadout (LD1,
LD2, LD3 partial); mud ruts (RUT1); woodcutting (WC1); stamina + thermos (SV3, SV3b); lake region R3 (LK1) and lake
life (LK2); cargo grid + 20 models (CG1); night sky (SKY1); water shader (WS2); clothing/rucksack (INV1); player kit
— gun beside the rucksack, P stash, L flashlight (INV2); NPC animation (AN1); combat tests (CT1); ray picking,
stacking, placement ghost, camera pitch (IX1); generated axe + 6 fish (GEN4); co-op N3 (player slots), N4 (commands, arbitration, locks), N5 (several players in fights, friendly fire), N6 seats and N7 client play/shared-vehicle jitter correction; MAPSTREAM1/MAPSTREAM2 automatic per-tile props/shadows/POI/power rendering.

## Backlog candidates (only when the owner asks or the queue is empty and he allows new agents)
- LD1-2: re-bake the three shotgun bandits with the new stocked hold (tools ready, LD3).
- LK2-1: lake residents walk through cabins (need simple paths).
- INV2: a lit flashlight takes both spot-light slots, so the headlights stop lighting the scene.
- RV6/RV7: reshape the Bystraya trench head at the creek_463 mouth; neck cutoff for two tight loops.
- IX-1/IX-2: crosshair-aimed ground drop; ray picking for wrecks/outpost crates.
- GEN4 leftovers: auger hand pose, axe swing in view, fish crate per species, rod/float/crown/stump models.
- Co-op W4 (remote driver + warp/sleep/menus), W5 (4 players + NAT/soak) — ON HOLD; W3 implemented.
