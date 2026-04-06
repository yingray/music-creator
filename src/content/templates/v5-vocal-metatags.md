---
title: v5 Vocal Track with Metatags
description: Template for v5 vocal tracks using the hybrid approach — style prompt for global sound plus metatags in the lyrics field for section-level vocal and energy control.
tags: [v5, vocal, metatags, hybrid]
genre: "{genre}"
mood: "{mood}"
prompt_template: "{genre}, {mood} energy, {tempo} BPM, {instrument_1}, {instrument_2}, {production_quality}, {vocal_direction}, {use_case}"
negative_prompt_template: "{exclude_genre}, {exclude_element_1}, {exclude_element_2}"
variables: [genre, mood, tempo, instrument_1, instrument_2, production_quality, vocal_direction, use_case, exclude_genre, exclude_element_1, exclude_element_2]
created: 2026-04-06
updated: 2026-04-06
---

## v5 Vocal Track Template

This template implements the **v5 recommended formula**: `STYLE + MOOD + TEMPO/ENERGY + INSTRUMENTS + VOCAL DIRECTION + USE CASE`, combined with a metatags skeleton for the lyrics field.

### Variable Guide

| Variable | Description | Examples |
|----------|-------------|---------|
| `{genre}` | Primary genre/sub-genre | indie pop, melodic house, gospel trap fusion |
| `{mood}` | 1-2 mood terms | warm uplifting, dark introspective, euphoric |
| `{tempo}` | BPM from genre calibration table | 108, 124, 140 |
| `{instrument_1}` | Primary instrument with adjective | acoustic guitar, analog synth, Hammond organ |
| `{instrument_2}` | Supporting instrument with adjective | airy synth pad, punchy trap drums, warm Rhodes |
| `{production_quality}` | Production character | crisp clean production, lo-fi tape warmth, wide stereo field |
| `{vocal_direction}` | How the voice sounds | warm female vocal, raspy male tenor, soft dream-pop vocal |
| `{use_case}` | What the track is for | content creation, driving playlist, workout mix |
| `{exclude_genre}` | Genre to exclude | metal, country, classical |
| `{exclude_element_1}` | First element to exclude | aggressive, distortion, screaming |
| `{exclude_element_2}` | Second element to exclude | harsh, lo-fi, acoustic |

### Metatags Lyrics Skeleton

Copy and customize this structure in the Suno lyrics field:

```
[Intro]
[{Instrument metatag}]
[{Atmosphere/Mood metatag}]

[Verse 1]
[Vocal Style: {verse delivery}]
(your verse 1 lyrics)

[Pre-Chorus]
[Energy: Building]
(your pre-chorus lyrics)

[Chorus]
[{chorus delivery: Belted, Harmonies, etc.}]
[Energy: Explosive]
(your chorus lyrics — make it memorable and repeatable)

[Verse 2]
[Vocal Style: {verse delivery — can vary from V1}]
(your verse 2 lyrics)

[Bridge]
[Mood: {contrasting mood}]
[{special vocal tag: Harmonies, Spoken Word, Whispered}]
(your bridge lyrics — new angle or emotional shift)

[Outro: {Fade out or Big finish}]
[Callback: Chorus melody]
```

### Common Vocal Progressions

| Track Vibe | Verse → Chorus | Bridge |
|------------|---------------|--------|
| Pop anthem | Whisper → Belted | Harmonies |
| R&B/Soul | Breathless → Melismatic | Spoken Word |
| Rock/Alt | Raspy → Shouting | Whispered |
| Electronic pop | Breathless → Harmonies | Spoken |
| Rap/Hip-hop | Verse: Rap → Belted chorus | Spoken Word |

### BPM Quick Reference

Consult `knowledge/suno-moods.md` for the full genre-BPM calibration table. Common ranges:
- Lo-fi: 70–84
- Indie Pop: 102–112
- K-Pop: 120–132
- Trap: 130–150 (half-time)
