# Suno v5 Metatags Reference

> Metatags are bracket-formatted structural tags placed in the **lyrics field** (Custom mode) or combined with style prompts.
> They give Suno explicit control over song structure, vocal delivery, mood shifts, and production effects.
> Last reviewed: 2026-04-06

## When to Use Metatags vs. Pure Descriptive Prompts

| Approach | Best For |
|----------|----------|
| **Pure descriptive** (comma-separated terms in style prompt) | Instrumental, ambient, classical — where free-form texture matters more than section structure |
| **Metatags** (bracket tags in lyrics field) | Vocal tracks, pop, rap, electronic — where section control, vocal delivery, and energy dynamics are critical |
| **Hybrid** (style prompt + metatags in lyrics) | Most v5 use cases — style prompt sets the global sound, metatags control per-section behavior |

---

## Song Structure Tags

These define the macro layout of the track. Place them **before the lyrics for each section**.

| Tag | Purpose |
|-----|---------|
| `[Intro]` | Opening atmosphere — sets the tone |
| `[Verse]` / `[Verse 1]`, `[Verse 2]` | Narrative sections |
| `[Pre-Chorus]` | Building tension before the hook |
| `[Chorus]` | Main melodic hook / climax |
| `[Bridge]` | Emotional or stylistic pivot point |
| `[Outro]` | Closing section |
| `[Interlude]` | Musical break between main sections |
| `[Break]` | Stripped-down moment — rhythm or melody pauses |
| `[Instrumental]` | Vocal-free section |
| `[Solo]` | Instrument solo passage |

### Variants and Modifiers

```
[Outro: Fade out]       — gradual ending
[Outro: Big finish]     — explosive ending
[Verse: Rap]            — specify delivery style for a section
[Chorus x2]             — repeat the chorus twice
```

### v5-Exclusive Structure Tags

| Tag | Purpose |
|-----|---------|
| `[Build]` | Rising intensity — gradual tension increase |
| `[Build-up]` | Same as Build — alternative naming |
| `[Drop]` | Sudden energy release (electronic/dance music) |
| `[Callback: Chorus melody]` | Reference and replay a previous section's hook at the outro |
| `[Continue with same vibe as Chorus]` | Maintain sonic consistency into next section |
| `[Drum Break]` | Percussion-focused transition |

---

## Vocal Style Tags

Control how the vocalist performs. Place before lyrics in the relevant section.

### Full-Form Tags (more precise)

| Tag | Character |
|-----|-----------|
| `[Vocal Style: Whisper]` | Intimate, breathy, quiet delivery |
| `[Vocal Style: Raspy]` | Gritty, weathered texture |
| `[Vocal Style: Falsetto]` | High-pitched, airy vocals |
| `[Vocal Style: Operatic]` | Classical, dramatic singing |
| `[Vocal Style: Melismatic]` | Complex vocal runs (R&B, soul) |
| `[Vocal Style: Monotone]` | Flat delivery — experimental rap, post-punk |
| `[Vocal Style: Shouting]` | High-energy — punk, metal, hardcore |
| `[Vocal Style: Breathless]` | Modern, intimate phrasing (v5 specific) |

### Short-Form Tags

| Tag | Character |
|-----|-----------|
| `[Whispered]` | Same as Vocal Style: Whisper |
| `[Belted]` | Powerful sustained notes |
| `[Spoken]` / `[Spoken Word]` | Non-melodic narration |
| `[Harmonies]` | Layered vocal arrangements |
| `[Screaming]` | Extreme metal vocals |

### Group Vocal Tags

| Tag | Character |
|-----|-----------|
| `[Choir: Gospel]` | Full, rich gospel backing vocals |
| `[Harmony: High]` | Angelic / pop-style backing vocals |
| `[Vocal Ad-libs]` | Scattered "Yeah," "Whoa," "Uh-huh" |
| `[Ad-lib: Yeah!]` | Specific custom ad-lib phrase |

### Voice Processing

| Tag | Character |
|-----|-----------|
| `[Voice: Auto-tune]` | Modern trap/pop robotic effect |

---

## Mood, Atmosphere & Energy Tags

Override or shift the emotional direction mid-song.

### Mood

| Tag | Character |
|-----|-----------|
| `[Mood: Euphoric]` | Uplifting, bright, happy |
| `[Mood: Melancholic]` | Sad, reflective, somber |
| `[Mood: Aggressive]` | Intense, fast, forceful |
| `[Mood: Chill]` | Relaxed, laid-back |
| `[Mood: Nostalgic]` | Wistful, old-school feelings |
| `[Mood: Dark]` | Ominous, brooding |
| `[Mood: Romantic]` | Passionate, loving, soft |

### Atmosphere

| Tag | Character |
|-----|-----------|
| `[Atmosphere: Dreamy]` | Ethereal, floating, spacious |
| `[Atmosphere: Cyberpunk]` | Futuristic, neon, digital |
| `[Atmosphere: Medieval]` | Ancient, epic, castle-like |

### Energy

| Tag | Character |
|-----|-----------|
| `[Energy: Explosive]` | Sudden bursts of power — great for choruses |
| `[Energy: Building]` | Gradual increase in tension |

### Vibe (v5 specific)

| Tag | Character |
|-----|-----------|
| `[Vibe: Cinematic]` | Immersive, film-score quality |

---

## Production & Effect Tags

Shape the sonic texture and studio quality.

### Effects

| Tag | Character |
|-----|-----------|
| `[Effect: Lo-fi]` | Dusty vinyl crackle, filtered sound |
| `[Effect: Reverb: Hall]` | Massive, spacious echo |
| `[Effect: Delay: Ping-pong]` | Bouncing stereo echoes |
| `[Effect: Distortion]` | Heavy clipping — industrial, rock |
| `[Effect: Sidechain]` | Pumping volume effect — house music |
| `[Effect: Bitcrusher]` | Digital degradation, 8-bit sound |
| `[Effect: Autopan]` | Sound moving left to right |
| `[Effect: Fade Out]` | Gradual volume decrease at end |
| `[Effect: Radio Filter]` | Small radio speaker sound |

### Texture

| Tag | Character |
|-----|-----------|
| `[Texture: Grainy]` | Cracked, analog feel |
| `[Texture: Velvet]` | Smooth, warm quality |
| `[Texture: Leafy]` | Organic, textured layers (v5 specific) |

### Mastering (v5 specific)

| Tag | Character |
|-----|-----------|
| `[Remaster: Subtle]` | Light audio enhancement |

---

## Instrument Tags

Specify instruments with bracket format for precise per-section control.

### Strings
`[Electric Guitar]`, `[Acoustic Guitar]`, `[Cello]`, `[Violin]`, `[Distorted Bass]`, `[Banjo]`, `[Ukulele]`, `[Harp]`, `[Double Bass]`

### Keys
`[Grand Piano]`, `[Electric Piano]`, `[Hammond Organ]`, `[Rhodes]`, `[Analog Synth]`, `[Accordion]`, `[Harpsichord]`, `[Mellotron]`

### Percussion
`[808 Bass]`, `[Electronic Drums]`, `[Hand Percussion]`, `[Timpani]`, `[Drum Break]`, `[Congas]`, `[Shakers]`, `[Tambourine]`, `[Gong]`

### Wind
`[Saxophone Solo]`, `[Trumpet]`, `[Flute]`, `[Clarinet]`, `[Harmonica]`, `[Trombone]`, `[Oboe]`, `[Bagpipes]`, `[Didgeridoo]`

---

## Dynamic Modifiers

Fine-grained control over tempo, repeats, and delivery.

| Tag | Purpose |
|-----|---------|
| `[Tempo: 128 BPM]` | Explicit speed control |
| `[Chorus x2]` | Repeat chorus twice |
| `[Verse: Rap]` | Rap delivery for this verse |
| `[Instrument: 808 Distorted]` | Specific instrument quality |
| `[Heavy Bass]` | Emphasis on low-end |
| `[Synthesizer Solo]` | Synth-featured passage |

---

## Usage Rules

1. **Wrap all tags in square brackets**: `[TagName]`
2. **Place tags before the relevant lyrics** in Custom mode
3. **Combine tags for specificity**: `[Verse 1: Rap, High Energy]`
4. **Structure first, effects second**: Define `[Intro]` → `[Verse]` → `[Chorus]` before adding mood/production tags
5. **Tag placement matters**: Reserve high-energy tags for `[Chorus]` sections
6. **v5 handles natural language alongside tags**: You can mix descriptive phrases with bracket tags
7. **Don't overload**: 2-4 tags per section is optimal; too many compete

## Combining Style Prompt + Metatags (Hybrid Approach)

The most effective v5 workflow uses both:

**Style prompt** (sets the global sound):
```
indie pop, warm uplifting energy, acoustic guitar, synth pad, 108 BPM, female vocal
```

**Lyrics field** (metatags control per-section structure):
```
[Intro]
[Acoustic Guitar]
[Atmosphere: Dreamy]

[Verse 1]
[Vocal Style: Whisper]
Walking through the morning light
Every shadow fades away

[Pre-Chorus]
[Energy: Building]
Can you feel it rising now

[Chorus]
[Belted]
[Energy: Explosive]
We are golden, we are free
Nothing's gonna hold us down

[Verse 2]
[Vocal Style: Breathless]
Midnight conversations, stars above
Every word a universe

[Bridge]
[Mood: Nostalgic]
[Harmonies]
Remember when we started here

[Outro: Fade out]
[Callback: Chorus melody]
```

## Complete Instrumental Example (Using Structure Tags Only)

Even instrumental tracks benefit from v5 structure tags:

**Style prompt:**
```
ambient electronic, ethereal atmosphere, synth pads, deep bass, 70 BPM
```

**Lyrics field:**
```
[Intro]
[Texture: Velvet]

[Instrumental]
[Build]

[Instrumental]
[Energy: Explosive]
[Drop]

[Outro: Fade out]
[Effect: Reverb: Hall]
```

## Version Compatibility

| Feature | v3.5/v4 | v5 | v5.5 |
|---------|---------|-----|------|
| Basic structure tags | Yes (2-3 max) | Yes (full set) | Yes |
| Vocal style tags | Limited | Full support | Full support |
| Mood/Energy tags | No | Yes | Yes |
| Production effect tags | No | Yes | Yes |
| Natural language + tags | No | Yes | Yes |
| Persona stability | No | Yes | Yes |
| Callback/Continue | No | Yes | Yes |
