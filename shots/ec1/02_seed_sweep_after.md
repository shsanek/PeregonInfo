# EC1 seed sweep (after)

`peregon_economy_sim --seed N` (embedded data, 200 synthetic players), design checks of every seed. Before-EC1 numbers: docs/balance.md, EC1.

## Seed 1

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1197 (net 1372 in 68:43, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 122 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 59 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:49 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:44) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1220, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:26, first T3 bought 68:15 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 100 %), 4 items worth 32 left, load 60-62 % | OK |

## Seed 2

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1193 (net 1365 in 68:39, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 121 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 54 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:46 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:41) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1221, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:23, first T3 bought 68:12 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 91 %), 2 items worth 16 left, load 55-57 % | OK |

## Seed 3

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1181 (net 1353 in 68:43, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 124 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.4 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 49 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:49 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:44) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1220, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:26, first T3 bought 68:15 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 100 %), 3 items worth 24 left, load 62-62 % | OK |

## Seed 4

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1200 (net 1374 in 68:42, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 15 %: repair 137 (9 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 61 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 13 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:48 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:43) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1220, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:25, first T3 bought 68:15 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 100 %), 2 items worth 16 left, load 60-60 % | OK |

## Seed 5

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1213 (net 1389 in 68:41, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 122 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 59 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:48 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:43) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1221, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:25, first T3 bought 68:14 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 95 %), 6 items worth 48 left, load 57-60 % | OK |

## Seed 6

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1186 (net 1358 in 68:41, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 15 %: repair 136 (9 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 55 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:47 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:42) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1221, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:24, first T3 bought 68:14 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 95 %), 1 items worth 8 left, load 57-62 % | OK |

## Seed 7

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1190 (net 1364 in 68:43, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 130 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 62 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:49 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:44) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1220, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:26, first T3 bought 68:15 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 100 %), 5 items worth 40 left, load 60-62 % | OK |

## Seed 8

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1189 (net 1362 in 68:41, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 124 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 54 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 13 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:47 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:42) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1221, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:24, first T3 bought 68:14 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 95 %), 3 items worth 24 left, load 57-60 % | OK |

## Seed 9

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1206 (net 1381 in 68:42, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 130 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 60 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 13 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:48 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:43) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1220, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:25, first T3 bought 68:15 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 100 %), 5 items worth 40 left, load 60-60 % | OK |

## Seed 10

| Check | Source | Target | Simulation | Verdict |
|---|---|---|---|---|
| Upgrades within 30 min | 02 stream G | 2-3 | balanced 2, policies 1-2 | OK |
| Net coupons per hour (completed runs) | 02 numbers, 04 10.3 | about 1 000 (750-1 250) | 1204 (net 1379 in 68:41, 5 runs) | OK |
| Expenses / income in a hauling loop (repair, ammo, fuel) | 04 10.1, 10.3, 10.5, EC1 | 10-20 %: repair 5-12 %, ammo 3-8 %, fuel 1-4 %, food and trade losses 0 % | 14 %: repair 132 (8 %), ammo 78 (5 %), fuel 21 (1 %) | OK |
| Map pace: km per play hour | MAP decision 3 (P1) | 35-45 km | 38 km (road xp 230 per hour at 6 per km, fuel 8.3 l) | OK |
| First mechanic visit: tires T2 or armour T2 | 02 SESSION 0:15-0:20 | 0:15-0:21, exactly one T2 affordable | 16:20, 1 T2 affordable | OK |
| What is taken first at the mechanic | 02 CHECKS | no slot >= 80 % | armor 56 % | OK |
| Is 40 % ammo enough (one weapon's rig covers ~40 % of an outpost, one car trip) | 02 CHECKS, 04 4.3, 10.1 | 40 % +- 10 %, trips = 1 | gas_station sawn_off 32 %, nailgun 45 %, trips 1; elevator sawn_off 45 %, nailgun 32 %, trips 1 | OK |
| Parts for all four T2 within the hour | 04 10.8 | 8 parts | 12 parts per hour | OK |
| Contract 1 back at camp / contract 3 starts | 02 SESSION 0:15-0:20 / 0:32 | 0:15-0:21 / 0:27-0:32 | 16:20 / 29:47 | OK |
| Upgrades by the end of contract 3 (prototype finale) | 02 SESSION 0:32+ | 2-3 | 2 (contract 3 ends 42:42) | OK |
| XP per hour in Zarechye (completed runs) | 04 10.2 | about 1 000 (750-1 250) | 1221, rank 4 | OK |
| T3 timing: nodes T1-T2 in hour 1, T3 from hour 1 | 04 07, 10.3, 10.4 | no policy buys T3 before 1:00; saver affords the first T3 at 0:45-1:15 | saver 56:24, first T3 bought 68:14 | OK |
| Greed at fight stops: the stash fills the bed | 02 contract 2, 03 4, EC1 | every fight stop leaves loot or fills >= 90 % of the cells; load leaving a fight stop 50-100 % | 2 of 2 fight stops full (min cells 95 %), 4 items worth 32 left, load 57-60 % | OK |
