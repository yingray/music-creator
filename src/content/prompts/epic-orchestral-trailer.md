---
title: "Epic Orchestral Trailer"
tags: [orchestral, epic, cinematic, trailer, dramatic]
genre: orchestral
mood: epic
instruments: [orchestra, brass, timpani, choir, strings]
suno_model: v5
bpm: 140
use_case: trailer, cinematic
metatags: true
prompt: "epic orchestral trailer music, dramatic heroic energy, 140 BPM, French horn melody, thundering timpani, taiko drums, soaring strings, dramatic choir, cinematic percussion, instrumental, trailer background"
negative_prompt: "electronic, synth, acoustic guitar, vocals, gentle, soft, ambient, lo-fi"
rating: 3
starred: false
created: 2026-04-06
updated: 2026-04-06
---

## Notes

Updated to v5 — applied previous improvement suggestions (French horn melody, taiko drums) and added use case. v5 metatags solve the original "building intensity" issue by giving explicit structural control.

### Previous Issues (v4) — Now Addressed
- ~~"Building intensity" doesn't always translate well~~ → v5 `[Build]` metatag handles this explicitly
- ~~Choir sometimes overpowers the brass~~ → metatags let you control where choir enters
- ~~Generic "brass fanfare"~~ → changed to "French horn melody"
- ~~Missing taiko~~ → added "taiko drums" for impact

### Recommended Metatags (Lyrics Field)

```
[Intro]
[Atmosphere: Medieval]
[Grand Piano]

[Build]
[Energy: Building]

[Instrumental]
[Mood: Euphoric]
[Timpani]

[Drop]
[Energy: Explosive]
[Choir: Gospel]

[Instrumental]

[Build-up]

[Outro: Big finish]
[Energy: Explosive]
```

### Further Improvements to Try
- Add `[Vibe: Cinematic]` to the intro for film-score quality
- Try separating choir to bridge only: prevents it from competing with brass
- v5's instrument tags manifest with clearer separation — each element stays distinct
