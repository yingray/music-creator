---
title: "Solo Classical Guitar Fingerstyle"
tags: [classical, guitar, solo, fingerstyle, polyphonic, intimate, acoustic]
genre: classical solo
mood: refined
instruments: [nylon-string classical guitar]
suno_model: v5
use_case: intimate recital, background listening
prompt: "solo nylon-string classical guitar, fingerstyle only, fully instrumental, polyphonic writing with independent bass and treble voices, clear voice leading, balanced phrasing, elegant articulation, subtle rubato, warm rounded tone, intimate natural recording, classical restraint, refined and timeless, no strumming, no modern effects, traditional classical guitar idiom, solo recital"
negative_prompt: "electronic, EDM, synth, synthesizer, drum machine, drum kit, beats, loops, pop, rock, hip-hop, electric guitar, bass guitar, steel-string guitar, strumming, vocals, singing, voice, accompaniment, orchestra, strings section, brass, piano, band, ensemble, distortion, overdrive, reverb-drenched, delay, chorus effect, flamenco, jazz, bossa nova, modern production, ambient electronic texture"
starred: false
created: 2026-04-06
updated: 2026-04-06
---

## Notes

The only single-instrument prompt in the collection. The challenge is getting Suno to produce genuine polyphonic classical guitar — independent bass and treble voices — rather than simple melody-over-chords or strumming patterns.

### Key Design Decisions
- "fingerstyle only" + "no strumming" — double reinforcement in both positive and negative prompts because Suno's guitar model defaults to strumming
- "polyphonic writing with independent bass and treble voices" — the most important descriptor; without it, Suno produces homophonic texture
- "classical restraint" — prevents virtuosic showmanship that would break the intimate character
- "traditional classical guitar idiom" — era anchor (parallels "19th-century classical idiom" in the orchestral set)

### Key Descriptors
- `polyphonic writing`, `independent bass and treble voices`, `clear voice leading`
- `elegant articulation`, `subtle rubato`, `warm rounded tone`

### Custom Negative Prompt Strategy
This prompt uses a unique negative prompt because it must exclude:
- **All accompaniment:** orchestra, ensemble, piano, band, strings section, brass
- **Other guitar types:** steel-string guitar, electric guitar
- **Strumming** (reinforced from positive prompt)
- **Genre confusion:** flamenco, jazz, bossa nova (common guitar genre associations)
- **Modern effects:** chorus effect, overdrive, distortion, delay, reverb-drenched

### v5 Notes
- v5's improved instrument separation helps maintain the independence of bass and treble voices
- "intimate natural recording" works better in v5 — produces a more realistic close-mic'd guitar sound
- No metatags needed — solo guitar benefits from organic, free-flowing structure

### See Also
- [Baroque Cello & Piano](/prompts/baroque-cello-piano-duo/) — Similar classical purity, but duo format
