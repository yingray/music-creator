# Suno Model Best Practices

> This document should be updated as Suno releases new models.
> Last reviewed: 2026-04-06

## General Prompt Structure

### Effective Pattern
```
[genre/style], [mood/atmosphere], [key instruments], [production quality], [tempo/BPM]
```

### Example
```
dark ambient electronic, haunting atmosphere, ethereal synth pads, deep sub-bass,
reverb-drenched, slow evolving textures, 60 BPM
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
Some Suno models support section hints:
- `[Intro]`, `[Verse]`, `[Chorus]`, `[Bridge]`, `[Outro]`
- `[Instrumental]`, `[Break]`, `[Solo]`
- `[Build]`, `[Drop]`, `[Climax]`

### Duration Hints
- Suno typically generates 1-4 minute tracks
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
