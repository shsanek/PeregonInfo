# STORYRUN R2-2 landed

- Iteration: R2-2 S5 act I «Стоит ли ещё» (Berezovka plot 11 and the elevator wagons). Last STORYRUN iteration before the owner stop.
- Added: Egor's topics «Съездить, глянуть на дом?» and «Вот банка из подпола.», quest `s5_home` (look → bring → sprout),
  the crawl hatch at plot 11 with its clue (jar of seed potatoes, Nina's photo), the potato box by the wagon, Egor's
  sprouted greeting, his B16 house topic unlocked for act II. Sites placed by POI-local coordinates (`place =`), no rebake.
- Tests: story_lint 0 errors; story_tests 21/21; play_story_tests 15/15; play_dialogue_tests 11/11; play_journal_tests 9/9;
  poi_export --check clean; two-process PASS (late client hands Egor the jar; host and client at `sprout`, the row visible on both).
- Frame time by the row: 11.8 / 13.3 ms mean / p95 with it, 11.6 / 12.9 ms without.
- Shots `reports/shots/storyrun/s5_home/`: 01 Egor's Berezovka topic, 02 his request, 03 the hatch by the house at plot 11,
  04 the cellar page, 05 Egor gets the jar, 06 the potato row by the wagon, 07 Egor after the sprouts.
