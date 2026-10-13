# TA1 time x8: late summer to winter (native Metal, 1280x720)

One headless run, `play_region`, `--start home_inside --season summer:0.75`, U pressed at frame 200 and held on
for the whole run (no drops), fixed debug camera over the kolkhoz field and the birch belt
(`--camera 36400,22300,120,60,-10`). 153 859 frames = 1 229 479 simulation ticks = 14.2 game days
(late summer 0.75 -> winter 0.53). One shot per game day at 13:00 (`dayNN_SEASON.jpg`), HUD shows `×8`.

- `trace_hourly.csv`: one row per game hour from `--timewarp-trace` (clock, mode, x8, temperatures, battery,
  coolant, wetness, snowpack, farm year and crop looks, season, weather, precipitation, sun, river ice).
- `trace_daily_1300.md`: the 13:29 row of every day.

Frame time of the whole run (render every frame, 14 captures): mean 11.6 ms, wall 29.8 min.
Script: `build/tw/demo.sh` in the worktree (see docs/seasons.md section 8).
