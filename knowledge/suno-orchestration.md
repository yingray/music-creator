# Suno Orchestration & Arrangement Reference

## Classical Orchestration for Suno

Suno's training data is heavily weighted toward modern/popular music. Getting authentic classical orchestral results requires:
1. **Precise positive anchoring** — era, style, specific instrumentation
2. **Aggressive negative exclusion** — modern/electronic/popular elements
3. **Structural description** — tell Suno the form, not just the vibe

## Orchestral Sections

### Strings
| Role | Instruments | Prompt Terms |
|------|-------------|-------------|
| Melody | Violin I | sweeping violins, soaring violin melody |
| Counter-melody | Violin II, Viola | warm violas, inner voice strings |
| Emotional core | Cello | expressive cello, singing cello line |
| Foundation | Contrabass | deep contrabass, low string foundation |
| Full section | All | full string section, lush strings, string orchestra |

### Woodwinds
| Role | Instruments | Prompt Terms |
|------|-------------|-------------|
| Bright melody | Flute | airy flute, lyrical flute solo |
| Pastoral/lonely | Oboe | expressive oboe, pastoral oboe |
| Ancient/wild | Cor anglais | English horn, cor anglais, haunting woodwind |
| Warm mid-range | Clarinet | warm clarinet, delicate clarinet |
| Deep/reedy | Bassoon | deep bassoon, rich bassoon |

### Brass
| Role | Instruments | Prompt Terms |
|------|-------------|-------------|
| Distance/fate/majesty | French horn | warm French horn, noble horn call |
| Fanfare/heroic | Trumpet | bright trumpet, trumpet fanfare |
| Rich/bold | Trombone | bold trombone, rich low brass |
| Deep power | Tuba | deep tuba, powerful low brass |
| Full section | All | full brass section, majestic brass |

### Percussion
| Role | Instruments | Prompt Terms |
|------|-------------|-------------|
| Epic weight | Timpani | thundering timpani, restrained timpani roll |
| Passage transitions | Suspended cymbal | cymbal swell, shimmering cymbal |
| Eastern/cinematic power | Taiko | taiko drums, massive percussion |
| Texture | Triangle, Glockenspiel | delicate percussion, sparkling glockenspiel |

### Keyboards & Plucked
| Role | Instruments | Prompt Terms |
|------|-------------|-------------|
| Solo/intimate | Piano | concert grand piano, intimate piano |
| Shimmer/texture | Harp | harp glimmers, gentle harp arpeggios |
| Ethereal sparkle | Celesta | celesta, ethereal bells |

### Vocals
| Role | Type | Prompt Terms |
|------|------|-------------|
| Sacred atmosphere | Mixed choir | soft choir, choral pad |
| Ethereal/spiritual | Female choir | ethereal female voices, soprano choir |
| Purity | Boys' choir | boys choir, angelic voices |
| Solo expression | Solo voice | solo soprano, solo tenor |

## Orchestral Build Technique

The most powerful technique for Suno orchestral writing is the **layered build** — the same melody or theme presented at increasing orchestral scale.

### Why It Works
Suno handles gradual textural changes better than abrupt ones. Describing a build gives it structural guidance for the whole track.

### The 3-Stage Pattern

**Stage 1: Sparse/Intimate**
- 1-2 instruments (piano, solo woodwind, harp)
- Simple melody, lots of space
- High register, thin texture
- Prompt: "intimate opening, solo [instrument], transparent, spacious"

**Stage 2: Growing**
- Add cello, French horn, fuller strings
- Same melody, richer harmony
- Low register enters → space deepens
- Prompt: "gradual build, warm cello, French horn enters, deepening"

**Stage 3: Full/Majestic**
- Full orchestra, all sections
- Melody now carried by full strings
- Brass provides heroic quality
- Timpani/cymbal for weight and transitions
- Prompt: "sweeping full orchestra, majestic, triumphant"

### Key Principle
**The build works because the same theme transforms, not because new themes pile up.**

## Classical Period Anchoring

Different eras have distinct orchestral sounds. Anchoring helps Suno:

| Era | Anchor Terms | Character |
|-----|-------------|-----------|
| Baroque | Baroque, harpsichord, chamber ensemble, contrapuntal | Ornate, polyphonic |
| Classical | Classical period, Mozart/Haydn-era, balanced phrasing, elegant | Clean, balanced |
| Early Romantic | Romantic, Beethoven-era, dramatic contrasts | Passionate, structural |
| Late Romantic | Late-Romantic, Rachmaninoff/Tchaikovsky-inspired, lush | Rich, emotional, large |
| Impressionist | Impressionistic, Debussy-inspired, coloristic | Atmospheric, fluid |
| 20th Century | Modernist, Stravinsky/Bartók-inspired, angular | Dissonant, rhythmic |

### Anti-Modern Anchors
When you need to prevent modern scoring creep:
```
19th-century classical idiom, traditional acoustic orchestration, no modern scoring language
fully acoustic classical performance, natural concert hall ambience
```

## Shared Exclude Strategy

For classical/orchestral prompts, a **shared exclude set** prevents common drift problems:

### Core Excludes (always use)
```
electronic, synth, drum machine, drum kit, beats, loops, EDM, pop, rock, hip-hop, cinematic trailer, hybrid orchestral, risers, impacts, electric guitar, modern production
```

### Extended Excludes (for extra purity)
```
synth pads, trap drums, groove, house, techno, trance, dubstep, lo-fi, jazz, swing, funk, R&B, sound design, booms, sub bass, sidechain, distorted bass, bass guitar, claps, snaps, vocal chops, choir pads, ambient electronic texture, contemporary film score, epic trailer music
```

### When "Cinematic" Drifts to "Trailer"
This is the #1 problem. Add these to excludes:
```
cinematic trailer, hybrid orchestral, epic trailer music, modern film score
```
And add to positive prompt:
```
traditional acoustic orchestration, cinematic but not trailer-like
```

## Style-Specific Orchestration Tips

### Russian Late-Romantic (Rachmaninoff/Tchaikovsky)
- Lead with piano or strings
- "Rich chromatic harmony" is key
- French horn for nobility
- "Concert hall ambience" reinforces acoustic realism
- Exclude: everything electronic + jazz + pop

### Japanese Film Score (Hisaishi/Ghibli)
- Start sparse: piano + solo woodwind + harp
- Gradual build is essential
- French horn = distance, mountains, fate
- Keep woodwinds present even at climax (nature/spiritual quality)
- Exclude: trailer, heavy percussion, synth

### Western Classical (Mozart/Beethoven)
- "Balanced phrasing", "Classical period"
- Cleaner harmony, less chromatic
- Smaller ensemble by default
- Exclude: romantic excess, electronic

### Minimalist (Glass/Reich/Pärt)
- "Repetitive patterns", "gradual transformation"
- Fewer instruments, more process
- "Arpeggiated", "ostinato", "slowly evolving"
- Exclude: lush romantic, brass fanfare, dramatic
