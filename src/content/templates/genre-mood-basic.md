---
title: "Basic Genre + Mood Template"
description: "A simple starting template that combines genre, mood, and key instruments with sensible defaults"
tags: [basic, starter, versatile]
genre: any
mood: any
prompt_template: "{genre}, {mood} atmosphere, {instrument_1}, {instrument_2}, {texture}, {tempo} BPM"
negative_prompt_template: "{exclude_genre}, {exclude_mood}, {exclude_instrument}"
variables: [genre, mood, instrument_1, instrument_2, texture, tempo, exclude_genre, exclude_mood, exclude_instrument]
created: 2026-04-06
updated: 2026-04-06
---

## How to use

Fill in each variable to generate your prompt:

| Variable | Description | Examples |
|----------|-------------|----------|
| `genre` | Primary genre | electronic, jazz, rock, classical |
| `mood` | Emotional tone | dark, uplifting, melancholic, energetic |
| `instrument_1` | Main instrument | piano, synth, guitar, violin |
| `instrument_2` | Secondary instrument | bass, drums, strings, pad |
| `texture` | Sound texture descriptor | warm, crisp, lo-fi, ethereal |
| `tempo` | BPM value | 60-180 |
| `exclude_genre` | Genre to avoid | vocals, EDM, metal |
| `exclude_mood` | Mood to avoid | happy, aggressive |
| `exclude_instrument` | Instrument to avoid | drums, guitar |

## Example

**Filled**: `electronic, melancholic atmosphere, piano, synth pad, warm, 90 BPM`
**Negative**: `rock, happy, acoustic guitar`
