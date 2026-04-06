# Suno Model Best Practices

> This document should be updated as Suno releases new models.
> Last reviewed: 2026-04-06

## General Prompt Structure

### Classic Pattern (v4, still works in v5)
```
[genre/style], [mood/atmosphere], [key instruments], [production quality], [tempo/BPM]
```

### v5 Recommended Pattern
```
[style], [mood], [tempo/energy], [core instruments 2-4], [vocal direction], [use case]
```

v5 adds two important components:
- **Vocal direction** — how the voice should sound ("warm female vocal", "raspy male vocal", "no vocals")
- **Use case** — what the track is for ("content creation background", "trailer", "studying")

### Examples
```
# v4 style (instrumental)
dark ambient electronic, haunting atmosphere, ethereal synth pads, deep sub-bass,
reverb-drenched, slow evolving textures, 60 BPM

# v5 style (vocal)
indie pop, uplifting warm energy, 108 BPM, acoustic guitar, synth pad, light drums,
warm female vocal, content creation background

# v5 style (instrumental with use case)
lo-fi ambient, calm spacious, slow tempo, soft keys, vinyl texture, instrumental,
background music for studying
```

## Core Principles

### 1. Be Specific, Not Verbose
- **Good**: "dark ambient, ethereal pads, deep sub-bass, 60 BPM"
- **Bad**: "I want a really dark and mysterious ambient track with lots of synth pads that sound ethereal and a very deep bass that rumbles"
- Suno responds better to concise, comma-separated descriptors than natural language sentences

### 2. Genre First
- Lead with the genre/style — it sets the foundation
- Sub-genres are more effective than broad genres: "doom metal" > "metal"
- Combine max 2-3 genres: "jazz-infused electronic" works, "jazz rock funk electronic ambient" confuses

### 3. Mood Amplifiers
- Pair mood with physical descriptors: "dark, heavy" or "bright, floating"
- Use 1-2 mood terms max
- Avoid contradictory moods: "happy dark" doesn't work well

### 4. Instrument Specificity
- Name 2-4 key instruments for best results
- Add playing style or character: "fingerpicked acoustic guitar", "punchy 808 bass"
- Use texture terms: "warm", "crisp", "distorted", "clean"

### 5. Production Terms
- Include 1-2 production descriptors: "lo-fi", "polished", "raw", "compressed"
- Reference specific techniques: "tape saturation", "vinyl crackle", "sidechain compression"
- These significantly influence the final sound

### 6. Tempo Control
- Specify BPM when tempo matters
- Use range descriptors if flexible: "mid-tempo", "uptempo", "slow"
- BPM alignment with genre improves coherence

## Negative Prompts

### How They Work
- Negative prompts tell Suno what to avoid
- They're most effective for excluding prominent elements (vocals, specific instruments)
- Less effective for subtle production qualities

### Effective Negative Prompt Patterns
```
vocals, singing          → Remove all vocal content
drums, percussion        → Remove rhythmic elements
electronic, synth        → Keep it acoustic/organic
distortion, noise        → Keep it clean
fast tempo, upbeat       → Keep it slow/calm
```

### Common Negative Prompt Templates by Goal

**Instrumental only:**
```
vocals, singing, voice, rap, spoken word
```

**Pure ambient (no rhythm):**
```
drums, percussion, beat, rhythm, kick, snare, hi-hat
```

**Acoustic/organic only:**
```
electronic, synth, synthesizer, drum machine, 808, digital
```

**Clean/gentle:**
```
distortion, noise, aggressive, loud, harsh, screaming
```

### Tips
- Be explicit: "vocals" is better than "no singing"
- List specific instruments to exclude rather than broad categories
- Don't over-negate — 3-7 terms is the sweet spot
- Test incrementally: add one negative term at a time

## Song Structure Control

### Section Tags (in lyrics/prompt)
Section tags are placed in the **lyrics field** in Custom mode, before the lyrics for each section:
- `[Intro]`, `[Verse]`, `[Chorus]`, `[Bridge]`, `[Outro]`
- `[Instrumental]`, `[Break]`, `[Solo]`
- `[Build]`, `[Drop]`, `[Climax]`

v5 adds vocal, mood, and production metatags that go far beyond section structure.
See `knowledge/suno-metatags.md` for the comprehensive v5 metatags reference.

### Duration
- v4: typically 1-4 minute tracks
- v5: up to **4 minutes per single pass**, extendable to **8 minutes** via the Extend feature
- For longer pieces, use "extended" or "long form"
- For shorter pieces, use "short", "brief"

## Version-Specific Notes

### v3.5 → v4 Migration
- v4 has better understanding of complex genre combinations
- v4 handles production terms more accurately
- v4 better respects negative prompts
- Some v3.5 prompts may need simplification for v4 (it understands more from less)
- v4 is better at maintaining consistency throughout a track

### v4 Specific Tips
- Shorter prompts often work better than long ones
- Genre + 2-3 descriptors is often sufficient
- Production quality terms are well understood
- BPM specification is more accurately followed
- Multi-language genre terms work better (e.g., "bossa nova", "taiko")

### v4 → v5 Migration
- v5 understands the full metatags system (see `knowledge/suno-metatags.md`)
- v5 supports vocal persona stability — voice character stays consistent across sections and Extend chains
- v5 handles fusion pairs more stably (e.g., Pop+EDM, Gospel+Trap, Jazz+Hip Hop)
- v5 respects BPM and key specification more accurately
- v5 combines natural language style prompts with bracket metatags in the lyrics field
- v5 has Studio Timeline — select and replace specific sections without losing others (inpainting)
- v5 supports callback phrasing — reliably reference earlier melodies at the outro

### v5 Specific Tips
- **Shorter, cleaner still wins** — coherence over length; one main idea first
- **Iterate one variable at a time** — change tempo OR instrumentation OR vocal direction, not all at once
- **Use case matters** — specifying what the track is for (studying, trailer, content creation) improves relevance
- **Production studio terms** work well: "punchy drums, wide stereo field, crisp high-end, warm bass"
- **Temporal references > artist names**: "late 70s disco" > naming performers
- **Metatags for vocal tracks** — use bracket tags for section structure and vocal delivery control
- **Instrument tags manifest with clearer separation** in v5
- **Personas maintain consistent tone** across sections

### v5 Pre-Generation Checklist
Before generating, verify:
- [ ] One clear main style exists
- [ ] Emotional direction is obvious
- [ ] Energy level / BPM is specified
- [ ] Instruments match the style (2-4)
- [ ] Vocal approach is defined (or explicitly instrumental)
- [ ] Use case is specified when relevant
- [ ] Metatags are set up in lyrics field (if vocal track)

### v5.5 Personalization (March 2026)
v5.5 is NOT a new audio engine — it's a personalization layer on top of v5. All v5 prompt syntax, metatags, and best practices remain fully compatible.

**Voices** — Clone your own voice via upload or recording
- Suno applies automatic stem separation to isolate your vocal tone
- Requires anti-deepfake verification (speaking a random phrase)
- Pro/Premier tier only; locked to your account

**Custom Models** — Train Suno on your original music
- System analyzes your production style, instrumentation, and mixing
- Up to 3 models per account; separate models for different genres work best
- Pro/Premier tier only

**My Taste** — Automatic preference learning
- Learns passively from your generation history and skipped outputs
- Available to all users (including free tier)
- Shapes default suggestions; explicit prompts always override

**Prompt Optimization for v5.5:**
- When using **Voices**: drop gender descriptors ("male vocals", "female vocals") to free up prompt space
- When using **Custom Models**: eliminate generic production details the model already knows
- v5.5 rewards more **nuanced descriptors** that v5 might have ignored
- Stacking order: My Taste (foundation) → Custom Model (production DNA) → Voice (vocal tone) → Prompt (song direction)

## Advanced Prompt Strategies

### 1. Shared Exclude Sets
When creating a **series of related prompts** (e.g., multi-movement concerto, album tracks), use a single shared negative prompt across all of them. Benefits:
- Consistency across the set
- One place to tune exclusions
- Prevents style drift between related tracks

### 2. Era Anchoring
Add historical period anchors to prevent modern style creep:
```
19th-century classical idiom, traditional acoustic orchestration
```
This is especially important for classical/orchestral prompts where Suno's modern training data tends to pull results toward contemporary scoring.

### 3. Anti-Pattern Anchoring
Explicitly state what you're NOT going for in the positive prompt:
```
cinematic but not trailer-like
no modern scoring language
```
This is more effective than relying solely on negative prompts for subtle style distinctions.

### 4. Structural Description
Instead of only describing mood/timbre, describe the **form and progression**:
```
intimate opening, gradual symphonic build, expansive climax
```
This gives Suno structural guidance for the entire track, producing more coherent results.

### 5. Relationship Description
Describe how instruments interact, not just what they are:
```
intense dialogue between solo piano and orchestra
singing piano over tender orchestral accompaniment
```
This produces more interesting arrangements than simple instrument lists.

### 6. Layered Build Technique
For pieces that evolve from quiet to grand, describe the layers:
```
intimate piano opening → gradual symphonic build → sweeping full orchestra
```
Suno handles gradual textural changes better than abrupt ones. See `knowledge/suno-orchestration.md` for detailed orchestration layering guide.

### 7. Movement-Specific Keyword Strategy
When writing multi-movement works, identify 5 core keywords per movement:
- Mvt 1: grand, stormy, virtuosic, dramatic, sonata-form
- Mvt 2: lyrical, cantabile, introspective, tender, poetic
- Mvt 3: fiery, brilliant, triumphant, finale, exhilarating

### 8. Classical Prompt Length
For classical/orchestral, prompts can be longer (15-25 terms) because:
- More specificity is needed to prevent modern drift
- Era anchoring and anti-pattern terms add necessary guardrails
- This is an exception to the general "shorter is better" rule

## Common Pitfalls

1. **Too many genres** — Pick 1-2, not 5
2. **Contradictory descriptors** — "quiet loud" confuses the model
3. **Natural language** — Use comma-separated terms, not sentences
4. **Over-specifying** — 5-10 descriptors for pop/electronic, up to 20-25 for classical
5. **Ignoring negative prompts** — They're powerful, use them
6. **Not specifying BPM** — Leads to unpredictable tempo
7. **Vague instruments** — "guitar" < "fingerpicked nylon guitar"
8. **Forgetting production terms** — They shape the sound significantly
9. **"Cinematic" without guardrails** — Drifts to trailer/hybrid sound without explicit exclusion
10. **Insufficient classical exclusion** — Classical prompts need 15-50 negative terms to stay pure
11. **Not using metatags for vocal tracks (v5)** — Vocal tracks without section/delivery tags produce less controlled results
12. **Missing vocal direction** — v5 prompts should specify how the voice sounds, not just whether vocals exist
13. **No use case specified** — Missing listener context results in generic outputs; specifying "for studying" or "trailer music" helps focus
