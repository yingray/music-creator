---
title: v5 Enhanced Instrumental
description: Updated instrumental template using the v5 formula with use case and optional structure metatags. Works for ambient, electronic, cinematic, and study music.
tags: [v5, instrumental, metatags-optional]
genre: "{genre}"
mood: "{mood}"
prompt_template: "{genre}, {mood} atmosphere, {instrument_1}, {instrument_2}, {texture}, {tempo} BPM, instrumental, {use_case}"
negative_prompt_template: "vocals, singing, voice, {exclude_genre}, {exclude_element}"
variables: [genre, mood, instrument_1, instrument_2, texture, tempo, use_case, exclude_genre, exclude_element]
created: 2026-04-06
updated: 2026-04-06
---

## v5 Enhanced Instrumental Template

Builds on the basic genre-mood template by adding **use case** (v5 recommended) and optional **structure metatags** — even instrumental tracks benefit from `[Build]`, `[Drop]`, and section tags in v5.

### Variable Guide

| Variable | Description | Examples |
|----------|-------------|---------|
| `{genre}` | Genre/sub-genre | dark ambient electronic, lo-fi chill hop, cinematic orchestral |
| `{mood}` | 1-2 mood terms | haunting ethereal, warm nostalgic, tense suspenseful |
| `{instrument_1}` | Primary instrument | ethereal synth pads, fingerpicked acoustic guitar |
| `{instrument_2}` | Supporting instrument | deep sub-bass, warm Rhodes, soft strings |
| `{texture}` | Production quality | reverb-drenched, tape saturation, crisp clean |
| `{tempo}` | BPM | 60, 85, 120 |
| `{use_case}` | Track purpose | background for studying, game soundtrack, meditation |
| `{exclude_genre}` | Genre to exclude | electronic, acoustic, metal |
| `{exclude_element}` | Element to exclude | distortion, drums, fast tempo |

### Optional Metatags for Instrumentals

Even without vocals, v5 structure tags improve coherence:

**For ambient/evolving tracks:**
```
[Intro]
[Texture: Velvet]

[Instrumental]
[Build]

[Instrumental]
[Energy: Explosive]

[Outro: Fade out]
[Effect: Reverb: Hall]
```

**For electronic/dance instrumentals:**
```
[Intro]
[Effect: Lo-fi]

[Build-up]

[Drop]
[Heavy Bass]
[Effect: Sidechain]

[Instrumental]

[Build-up]

[Drop]
[Energy: Explosive]

[Outro: Fade out]
```

**For cinematic/score instrumentals:**
```
[Intro]
[Atmosphere: Dreamy]
[Grand Piano]

[Build]
[Mood: Melancholic]

[Instrumental]
[Energy: Building]

[Instrumental]
[Mood: Euphoric]
[Energy: Explosive]

[Outro: Big finish]
```

### When to Use Metatags vs. Pure Descriptive

| Scenario | Recommendation |
|----------|---------------|
| Ambient / drone / minimal | Pure descriptive — metatags can over-structure |
| Lo-fi background | Pure descriptive or minimal metatags (`[Intro]`, `[Outro]`) |
| Electronic / dance | Metatags recommended — `[Build]`, `[Drop]` are essential |
| Cinematic / score | Metatags recommended — `[Build]` + mood shifts control the arc |
| Study / focus music | Pure descriptive — loop-friendly, avoid structural markers |
