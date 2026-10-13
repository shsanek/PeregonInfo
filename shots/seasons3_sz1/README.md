# SZ1 three-day seasons: one year at x16 (native Metal, 1280x720)

One headless run, `play_region`, `--start home_inside --season summer:0.0`, U pressed twice at frames 200 and 204
(x8, then x16) and held at x16 for the whole run without a single drop. Fixed debug camera over the kolkhoz field
and the birch belt (`--camera 36400,22300,120,60,-10`). 66 300 frames = 1 057 783 simulation ticks = 12.2 game days
(summer 0.0 -> summer 0.08 of the next year). One shot per game day at 13:00 (`dayNN_SEASON.jpg`); the HUD shows `×16`.

- `trace_hourly.csv`: one row per game hour from `--timewarp-trace` (clock, mode, warp factor, temperatures, battery,
  coolant, wetness, snowpack, farm year and crop looks, season, weather, precipitation, sun, river ice).
- `trace_daily_1300.md`: the 13:29 row of every day.

| Day | Season | Air | Snow | River ice | Crop (sown / wild) |
|-----|--------|-----|------|-----------|--------------------|
| 1-3 | summer | +18..+23 C, one rain day | 0 | 0 | green, ripening from day 2 evening, ripe from day 3 evening |
| 4-6 | autumn | +12 -> +5 C, two rain days | first snow day 6 04:30 (melts at noon) | first ice day 6 01:30 (0.02 m) | ripe, lodged from day 6 |
| 7-9 | winter | -6 / -11 / -8 C at noon, low -18.5 C | 0.11 / 0.23 / 0.35 m at noon | 0.26 / 0.49 / 0.67 m | lodged (under snow) |
| 10-12 | spring | +1 / +10 / +10 C | peak 0.47 m on day 10, gone day 11 19:30 (spring 0.50) | max 0.75 m day 10, gone day 11 16:30 | ploughed / old straw, sprouting from day 11 night |
| 13 | summer | +18 C | 0 | 0 | green |

Weather hours: summer 35 clear, 37 overcast, 5 rain; autumn 30 clear, 23 overcast, 5 rain, 14 snow; winter 40 clear,
12 overcast, 20 snow; spring 29 clear, 26 overcast, 9 rain, 8 snow. The winter road quest fired in winter (the HUD asks to fit the blade on day 8; the home
container is next to the Sawmill), its blizzard ran inside the warped run.

Frame time of the whole run (render every frame, 13 captures): mean 15.6 ms, wall 17.3 min.
Perf at x16 on foot (separate runs, `--season summer:0.5`, frames 300-1500, best of two, shared Mac): see
docs/seasons.md section 9.
