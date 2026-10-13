# WX1 climate, weather and foliage (native Metal, 1280x720)

Details: docs/seasons.md section 10.

## Spring leaf growth

`tools/seasons_tour.sh data/render/climate_spring_tour.txt OUT wx1` (after) and the same tour with the
`claude/peregon-design` binary (before). Birch grove, noon, spring 0.60 / 0.66 / 0.68 / 0.70 / 0.72 / 0.74 / 0.78
(close view) and 0.78 (grove view).

- `spring_growth_before.jpg`: calendar foliage, every tree in full leaf at spring 0.60.
- `spring_growth_after.jpg`: bare until the degree days reach budburst (spring 0.68 with this seed), then each leaf
  grows from its centre to full size over about a game day; the meadow greens first.
- `spring_s70_growing_leaves.jpg`, `spring_s72_growing_leaves.jpg`: half-grown leaves close up.

## Autumn

- `autumn_forest_edge_sequence.jpg`: `data/render/climate_autumn_tour.txt`, forest edge at autumn 0.10 .. 0.85: green,
  colour after the first frosts, leaves dropping one by one, bare from autumn 0.60 (mid-October).
- `drive_autumn_before_*.jpg` / `drive_autumn_after_*.jpg`: R2 border forest road (`--start r2_border`,
  `tools/replays/r2_border_drive.txt` with C pressed at tick 301 for the chase camera), `--season autumn:0.45
  --weather clear --time 13:20`, ticks 500 / 900 / 1300, 29 km/h: after, leaves swirl up behind the truck and settle,
  litter lines the road edge under the birches and aspens.

## Year at x16

`--start home_inside --season summer:0.0`, U pressed at frames 200 and 204, fixed camera over the kolkhoz field and the
birch belt (`--camera 36400,22300,120,60,-10`), 66 300 frames = 12.2 game days, no drop, mean frame 23.9 ms on the
loaded shared Mac.

- `year_dayNN_SEASON.jpg`: one shot per game day at 13:00.
- `year_trace_hourly.csv`: `--timewarp-trace` (one row per game hour) with the new columns `climate_doy`, `normal_c`,
  `anomaly_c`, `gdd`, `flush`, `colour`, `fallen`, `litter`, `falling`, `hoar`, `rime`, `cloud_cover`,
  `cumulonimbus`, `buildup`, `front`.
- `year_trace_daily_1300.md`: the 13:29 row of every day.

| Day | Season | Air at 13:00 | What happens |
|-----|--------|--------------|--------------|
| 1-3 | summer | +19..+23 C | full leaves, one rain day |
| 4 | autumn | +17 C | colour starts (doy 250) |
| 5 | autumn | +5 C (cold spell -5 C) | peak colour, half the leaves down, leaves falling |
| 6 | autumn | +9 C | bare, litter on the ground |
| 7 | winter | -2 C | first snow (doy 325), 0.02 m |
| 8 | winter | -10 C | 0.14 m, hoarfrost and rime on the trees |
| 9 | winter | -12 C | 0.32 m |
| 10 | spring | 0 C | 0.53 m of snow, thaw starts |
| 11 | spring | +18 C | snow gone, trees still bare (GDD 57, buds bursting) |
| 12 | spring | +16 C | leaves at 60 % |
| 13 | summer | +24 C | full leaves |
