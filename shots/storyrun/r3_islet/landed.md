# STORYRUN R3-1 landed

- Commit on `claude/peregon-design`: `0a7f995eb1` (8 commits, from `a878482692`-equivalent engine commit to the B16 merge).
- Iteration: R3-1 «Огонёк на острове» (A light on the islet), lake Gorlovoe.
- Added: hidden quest `r3_islet` (Lukich's two rumours made real: the emptied artel nets and the light on the islet;
  Kolya builds a cabin there for Tanya; help him with 5 logs + a box of nails or tell Stepanych; the cabin ends up on
  the islet or by the club, greetings and the paper map change); hidden POI cairn `r3_island_cache` (Stepanych's
  first-year list); morning bark Stepanych/Valentina; MAP place `r3_islet` (pad, rebaked R1, paper map regenerated);
  5 story-site blueprints and 3 kit pieces (log frame, cairn, lamp on a stake).
- Engine: story sites `[site.*]` (grey-box blueprints placed by story conditions, re-grounded as tiles stream in,
  clues on them, replicated through the story state), `quest.Q.age` + `clock.now`, `sq:QUEST:STAGE:SPOT:HHMM:...`
  dev stages with `!examine/!talk/!topic=`, `talk_choose`, client bot `person:NPC:TOPIC`, `PEREGON_LANG` for shots.
- Tests: story_lint 0 errors; story_tests 19/19 (3 new: both branches, save/load mid-quest, start/cairn/bark gate);
  play_story_tests 13/13 (4 new: sites, haul/take/save/day wait, sq stages, resident screens); play_dialogue_tests
  11/11; play_journal_tests 9/9; two-process run PASS (client tells Stepanych; both at stage told, same story hash,
  same visible sites) — `coop_two_process.txt`.
- Frame time: islet camp on foot, no measurable cost from the sites (51 grey boxes).
- Shots (`reports/shots/storyrun/r3_islet/`): 01 islet camp aerial, 02 lamp/fire at night, 03 camp on foot,
  04 board page, 05 cairn page, 06 bark at the nets (two lines), 07 Kolya's choice, 08 Stepanych told,
  09 islet cabin aerial, 10 cabin window at night, 11 artel frame by the club, 12 artel cabin, 13 Tanya after.
- Docs: `docs/storyrun.md` (new log), `docs/story-plan.md` §7 SR6 / §8 / §11 status.
