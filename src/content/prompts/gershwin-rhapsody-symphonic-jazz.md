---
title: "Gershwin-Style Jazz Age Concert Rhapsody"
tags: [classical, jazz, symphonic-jazz, orchestral, american, gershwin, piano, clarinet, saxophone, rhapsody, jazz-age]
genre: symphonic jazz concert rhapsody
mood: exuberant
instruments: [concert grand piano, solo clarinet, saxophone section, muted trumpet, strings, brass, woodwinds, timpani]
suno_model: v5
use_case: classical-jazz crossover, concert performance
reference:
  title: Rhapsody in Blue
  creator: George Gershwin
  source_type: work
  note: "Adapts Jazz Age episodic form, clarinet glissando character, and piano-orchestra dialogue."
prompt: "Symphonic jazz concert rhapsody, Gershwin-inspired but fully original, 1920s American Jazz Age, free clarinet glissando intro -> snapped syncopated piano-and-orchestra episodes -> broad singing lyrical theme -> virtuosic piano cadenza -> blazing final tutti, concert grand piano in conversational dialogue with orchestra, solo clarinet, saxophone section, muted trumpet color, crisp brass punches, playful woodwind exchanges, blues-inflected extended harmony, blue thirds and sevenths, stride-inflected piano flourishes, elastic rubato transitions, urban swagger, exuberant but refined, restrained timpani accents, fully acoustic concert performance, natural concert hall ambience, early 20th-century American symphonic idiom, instrumental only"
negative_prompt: "vocals, singing, voice, scat singing, spoken word, electronic, EDM, synth, synthesizer, synth pads, drum machine, drum kit, jazz drum kit, trap drums, pop drums, rock drums, beat, kick, snare, hi-hat, loops, house, techno, trance, dubstep, hip-hop, lo-fi, funk, R&B, pop, rock, cinematic trailer, hybrid orchestral, sound design, risers, impacts, booms, sub bass, sidechain, distorted bass, electric guitar, bass guitar, claps, snaps, vocal chops, choir pads, ambient electronic texture, modern production, contemporary film score, epic trailer music, bebop, free jazz, smooth jazz, fusion jazz, big band, lounge jazz"
starred: false
created: 2026-04-07
updated: 2026-04-07
---

## Notes

The previous version had the right label but too-generic musical fingerprint. This revision pushes the prompt closer to *Rhapsody in Blue* by specifying the sectional flow, Jazz Age orchestral colors, and the piano-orchestra call-and-response that actually define the piece.

Reference point: *Rhapsody in Blue* (1924) — clarinet glissando opening, episodic rhapsodic form, blues harmony inside orchestral writing, virtuoso piano, and urban Jazz Age swagger.

### What Changed
- Added `saxophone section`, `muted trumpet color`, and `restrained timpani accents` to recover the pre-war symphonic jazz palette
- Replaced generic "alternating fast and lyrical sections" with a concrete arc: intro -> syncopated episodes -> lyrical theme -> cadenza -> final tutti
- Shifted the piano role from generic soloist to `conversational dialogue with orchestra`
- Removed over-broad exclusions like `percussion` and `timpani`, which were suppressing orchestral punch instead of just blocking modern drums

### Key Descriptors
- `symphonic jazz concert rhapsody`, `free clarinet glissando intro`, `snapped syncopated piano-and-orchestra episodes`
- `broad singing lyrical theme`, `virtuosic piano cadenza`, `blazing final tutti`
- `saxophone section`, `muted trumpet color`, `blue thirds and sevenths`, `stride-inflected piano flourishes`

### Effective Patterns
- "Gershwin-inspired but fully original" keeps the project's composer-anchor convention, but the real control now comes from era, form, and orchestration descriptors
- "1920s American Jazz Age" is a stronger v5 anchor than composer name alone
- The arrow-style structural cue gives Suno a more coherent long-form shape than generic mood contrast
- "urban swagger, exuberant but refined" pushes toward concert-hall sophistication instead of loose club-jazz drift

### Negative Prompt Strategy
The goal is not "remove all rhythm" or "remove all percussion." The goal is to block modern rhythm-section behavior and wrong jazz eras. That is why the exclusions now target `drum kit`, `big band`, `bebop`, `smooth jazz`, `fusion jazz`, and modern production terms, while still allowing light orchestral percussion and timpani support.

### v5 Notes
- v5 responds better to concrete sectional sequencing than vague "rhapsodic" wording on its own
- Saxophone and muted brass cues help separate this from generic piano concerto output
- Keeping the prompt instrumental and concert-hall anchored reduces drift toward vocal jazz or trailer scoring

### See Also
- [Rachmaninoff Concerto Mvt 1](/prompts/rachmaninoff-concerto-mvt1/) — Shares virtuosic piano + orchestra format
- [Debussy Impressionist](/prompts/debussy-impressionist-orchestral/) — Shares early 20th-century era
