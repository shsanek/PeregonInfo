# STORYRUN R2-1 landed

- Commit on `claude/peregon-design`: `07eb79c7b9`.
- Iteration: R2-1 S6 «Почта» acts I-II (scrapyard and every region with an addressee).
- Added: clue `r2_paz_postbag` on the PAZ bus back door (no rebake: a point on the scrapyard blueprint), Sych's hint
  topic, hidden quest `s6_post` (deliver → round), six delivery topics (Sych, Valentina, Nadezhda, Gurov, Lida,
  Tamara), Sych's after-letter greeting, nine journal lines. Effects: smoked-fish recipe for all players, a grain sack,
  S1/S2/S3/S5 flags of section 10.
- Also: HUD banners hidden under the talk and examine screens (manager note); `sq:` action `!notebook`.
- Tests: story_lint 0 errors; story_tests 20/20 (new: bag, six deliveries, save mid-way, round, end); play_story_tests
  14/14 (new: bag in the bus + a delivery on Valentina's screen); play_dialogue_tests 11/11; play_journal_tests 9/9;
  two-process PASS (late client delivers Valentina's letter; both processes hold the flag).
- Shots `reports/shots/storyrun/s6_post/`: 01 bus back door with the prompt, 02 bag page, 03 Sych's hint,
  04-09 the six deliveries, 10 notebook «Дела» at the round stage.
