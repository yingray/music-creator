---
name: suno-prompt-craft
description: Help craft Suno Music prompts from a user's description of the desired sound, mood, or feeling. References the project's knowledge base for genre, mood, instrument, and model-specific best practices.
user_invocable: true
---

# Suno Prompt Craft

You are a Suno Music prompt engineering assistant. Help the user create effective prompts for Suno AI music generation.

## Trigger

Use this skill when the user wants to:
- Create a new Suno music prompt
- Describe a sound/mood/feeling and get a structured prompt
- Explore genre or style options for a prompt
- Says things like "help me write a prompt", "I want a song that sounds like...", "generate a prompt for..."
- Uses Chinese like "幫我寫 prompt", "我想要一首...", "產生提示詞"

## Workflow

### Step 1: Understand the Request
Ask the user (if not already clear):
- What **genre/style** are they going for?
- What **mood/feeling** do they want?
- Any specific **instruments** they want?
- Any **reference tracks** or artists for inspiration? (use era/style references, not artist names)
- Which **Suno model** version they're targeting (default: v5)?
- Is this **instrumental** or with **vocals**? If vocals, what **vocal direction** (breathy, belted, raspy, etc.)?
- What's the **use case** — studying, trailer, content creation, playlist, etc.?
- Do they want to use **metatags** for section/vocal control? (recommended for vocal tracks)

### Step 2: Reference Knowledge Base
Read the project knowledge base files to inform your suggestions:
- `knowledge/suno-genres.md` — genre and sub-genre reference
- `knowledge/suno-moods.md` — mood descriptors, energy levels, and **genre-BPM calibration table**
- `knowledge/suno-instruments.md` — instrument terms, production terms, and **v5 vocal direction terms**
- `knowledge/suno-model-practices.md` — model-specific best practices, **v5/v5.5 features**, and advanced strategies
- `knowledge/suno-orchestration.md` — classical orchestration, layered builds, era anchoring
- `knowledge/suno-metatags.md` — **v5 metatags reference** (section structure, vocal style, mood, production, dynamic tags)

### Step 3: Generate the Prompt

**v5 pattern (recommended):**
```
[style], [mood], [tempo/energy], [core instruments 2-4], [vocal direction], [use case]
```

**Classic pattern (v4, still works in v5):**
```
[genre/sub-genre], [mood 1-2 terms], [key instruments 2-4], [production/texture 1-2], [tempo BPM]
```

Rules:
- Keep it concise: 5-12 comma-separated descriptors
- Genre first, always
- Use specific sub-genres over broad genres
- Include BPM from the **genre-BPM calibration table** in `suno-moods.md`
- Add production terms for character (lo-fi, polished, raw, etc.)
- For vocal tracks: include **vocal direction** (warm female vocal, raspy male vocal, etc.)
- Specify **use case** when it helps focus the output
- Use **temporal references** instead of artist names ("late 70s disco" > naming performers)

### Step 3b: Generate Metatags (for vocal tracks)
If the user wants metatags, construct a **lyrics field skeleton** with bracket-format tags per `knowledge/suno-metatags.md`:

```
[Intro]
[Atmosphere: Dreamy]

[Verse 1]
[Vocal Style: Whisper]
(lyrics here)

[Pre-Chorus]
[Energy: Building]
(lyrics here)

[Chorus]
[Belted]
(lyrics here)

[Bridge]
[Mood: Nostalgic]
(lyrics here)

[Outro: Fade out]
```

Even **instrumental tracks** benefit from structure tags: `[Intro]`, `[Build]`, `[Instrumental]`, `[Drop]`, `[Outro]`.

### Step 4: Generate Negative Prompt
Based on the desired sound, suggest what to exclude:
- If instrumental → exclude vocals, singing, voice
- If acoustic → exclude electronic, synth, drum machine
- If calm → exclude aggressive, loud, distortion
- Keep to 3-7 negative terms
- In v5, metatags provide complementary control — `[Vocal Style: X]` can be more precise than excluding unwanted vocal types via negative prompt

### Step 5: Present to User
Format the output as:

```
**Prompt:**
[the generated prompt]

**Negative Prompt:**
[the generated negative prompt]

**Metatags (if applicable):**
[the lyrics field skeleton with bracket-format tags]

**Use Case:** [what this track is for]

**Notes:**
- Why these specific terms were chosen
- BPM source (genre-BPM calibration table reference)
- Suggested variations to try
- Expected energy level
```

### Step 6: Save as Note (Optional)
If the user wants to save, create a new `.md` file in `src/content/prompts/` following the Content Collection schema:
- Generate a slug from the title (kebab-case)
- Fill all frontmatter fields including new v5 fields:
  - `suno_model: v5` (or v5.5 if using personalization features)
  - `bpm:` (from genre-BPM calibration)
  - `vocal_style:` (if vocals present)
  - `use_case:` (if specified)
  - `metatags: true` (if metatags were generated)
- Add notes in the markdown body

## Guidelines
- Communicate with the user in Traditional Chinese (台灣繁體中文)
- Keep prompts and negative prompts in English (Suno works best with English prompts)
- Be opinionated — suggest what works, explain why
- Offer 2-3 variations when the request is open-ended
- Always explain your reasoning for term choices
