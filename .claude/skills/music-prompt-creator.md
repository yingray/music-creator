---
name: music-prompt-creator
description: End-to-end orchestrator for creating a new Suno music prompt note. Runs the full pipeline — intake → context gathering → draft → parallel expert review (6 agents) → consolidated report → user-approved revision → file write → build verification. Use this when the user wants to add a new prompt to src/content/prompts/.
user_invocable: true
---

# Music Prompt Creator (Orchestrator)

You are the orchestrator for creating a new Suno music prompt note in this Astro collection. You coordinate the full pipeline: intake → context gathering → draft generation → parallel expert review → consolidation → user-approved revision → file write → build verification.

## Trigger

Use this skill when the user wants to:
- Add a new Suno prompt to the collection
- Says "新增 prompt", "建立一個 Suno prompt", "add new prompt", "寫一個 XX 風格的 prompt"
- Names a composer / genre / ensemble and implies a new collection entry

**Do NOT use this skill** when the user only wants to draft a prompt without saving it (use `/suno-prompt-craft` instead), or only wants to review an existing one (use `/suno-prompt-review`).

## Relationship to Existing Skills

This skill is an **orchestrator**. It delegates to existing skills rather than replacing them:
- `/suno-prompt-craft` — called in Step 3 to draft positive prompt
- `/suno-negative-prompt` — called in Step 3 to draft negative prompt
- `/suno-prompt-review` — optionally called in Step 6 for a light revision check

The three underlying skills remain independently invocable.

---

## Workflow

### Step 1 — Intake

Gather from the user (only ask what is missing — if the initial request is clear enough, move on):

- **Composer / style reference**(e.g., Debussy, Rachmaninoff, Ghibli-inspired, synthwave)
- **Work / genre**(specific piece, movement, sub-genre)
- **Ensemble format**: solo / duo / chamber / orchestral / band / electronic / vocal-led
- **Mood / atmosphere**
- **Use case**(concert, study, background, trailer, etc.)
- **Suno model target**(default `v5`;`v5.5` if using Voices / Custom Models)
- **Vocal or instrumental**;if vocal, vocal direction and whether to use metatags

### Step 2 — Context Gathering (read-only)

Read in parallel (single message, multiple Read tool calls):

**Always**:
- `src/content.config.ts` — confirm current Zod schema (especially `reference.source_type` enum)
- `knowledge/suno-model-practices.md` — Era Anchor / Anti-Pattern Anchor / Classical Prompt Length rules
- `knowledge/suno-instruments.md` — accurate instrument terminology

**Conditionally**:
- Same-composer existing prompts in `src/content/prompts/` — differentiate, don't duplicate
- Same-ensemble existing prompts — learn format-specific strategies (solo prompts have unique negative-prompt layering; orchestral needs era anchor harder)
- `knowledge/suno-orchestration.md` — for orchestral / chamber work
- `knowledge/suno-metatags.md` — for vocal tracks
- `knowledge/suno-moods.md` — for BPM calibration if tempo matters
- `knowledge/suno-genres.md` — for unfamiliar sub-genres

Use `Glob` to list `src/content/prompts/*.md` first if uncertain about neighbors.

### Step 3 — Draft Generation

Produce a complete draft containing:

1. **Frontmatter** (all required Zod fields filled):
   - `title`, `tags`, `genre`, `mood`, `instruments`, `suno_model`, `prompt`, `negative_prompt`
   - Optional: `bpm`, `vocal_style`, `use_case`, `metatags`, `rating`, `starred`, `suno_url`
   - `reference` object: `title`, `creator`(optional)、`source_type`(`work` / `artist` / `franchise`)、`note`
   - `created` / `updated` = today
2. **Positive prompt** — ordered: genre/style anchor → harmonic or sonic language → texture/technique → dynamics → era anchor → format lock
3. **Negative prompt** — layered: base genre exclusion → format-specific exclusion → instrument-variant exclusion → style-drift exclusion → audio-quality exclusion
4. **Notes section** with six headings:
   - Opening description
   - **Key Distinction from [closest neighbor]**
   - **Key Design Decisions**
   - **Key Descriptors**
   - **Custom Negative Prompt Strategy**
   - **v5 Notes** + **See Also**

Internally delegate to `/suno-prompt-craft` and `/suno-negative-prompt` if useful, but you are responsible for the final structural integration.

### Step 4 — Parallel Expert Review (critical)

**In a single message, spawn six `general-purpose` agents in parallel.** Do not serialize.

Each agent receives: (a) the full draft (frontmatter + positive + negative + notes), (b) the creative intent one-paragraph summary, (c) their role-specific review scope from the table below.

**Standard prompt skeleton** for each agent:

> 你是[角色]。以下是一份 Suno music prompt 草稿與創作意圖說明:
>
> [insert creative intent paragraph]
>
> [insert full draft]
>
> 請從[領域]角度做獨立審查,列點回報(不寫段落,全篇 ≤250 字):
> 1. **保留**:同意且應保留的關鍵字或設計
> 2. **質疑/建議修改**:你不贊同或建議調整的部分,給替代方案
> 3. **必改**:絕對錯誤、必須修掉的地方
>
> 只從你的領域角度評論,不要越界評論其他領域(那是其他專家的工作)。

The six experts:

| # | Role | Scope |
|---|------|-------|
| 1 | **Composer Authenticity Expert** | 該作曲家本人語彙真實度、era anchor 正確性、不會誤植成鄰近作曲家的風格指紋 |
| 2 | **Music Theory / Harmony Expert** | 和聲語言(調式、擴張和聲、特徵音階)、曲式(sonata/prélude/rondo/character piece)描述與曲種匹配 |
| 3 | **Orchestration / Instrumentation Expert** | 樂器編制合理、技法可行、solo vs ensemble 描述一致、演奏指示符合樂器習慣 |
| 4 | **Suno Model Engineering Expert** | 對照 `knowledge/suno-model-practices.md`:prompt 長度、anchor 齊全、不踩 Common Pitfalls、v5 metatags 用法 |
| 5 | **Audio Production Expert** | 錄音描述(concert hall / small hall / studio / natural room)與曲種/編制匹配、動態與 pedal/reverb 描述合理、negative prompt 音色排除層次正確 |
| 6 | **Collection Consistency Expert** | 與既有 prompts 的 tags/genre/mood 命名一致、無重複/衝突、See Also 連結 slug 正確、taxonomy 維持 |

### Step 5 — Consolidation & Report

Merge the six reports into a single consolidated report structured as:

1. **共識保留** — 多位專家同意且應保留的設計決策(列出保留理由)
2. **重要質疑** — 有專家強烈建議修改的點(列出:專家 + 理由 + 替代方案)
3. **必改項** — 任何一位專家標記為「絕對錯誤」的內容(必須採納)
4. **建議修訂清單** — 整合後的具體修改動作,分為 frontmatter / positive / negative / notes 四類條列

Use `AskUserQuestion` to present the 建議修訂清單 (multiSelect) and let the user pick which revisions to apply. Always include an "全部採納" and "全部不採納" option.

### Step 6 — Revision

Apply the user-approved revisions. If the revision is substantial (e.g., user picked 50%+ of items), optionally delegate a light re-review to `/suno-prompt-review` or to 1–2 most relevant experts (not all six again).

### Step 7 — Write & Verify

1. Write the file to `src/content/prompts/<kebab-case-slug>.md`
2. Tell the user to run `npm run build` to validate Zod schema + Pagefind indexing
3. Report the expected page URL: `/prompts/<slug>/`
4. Remind the user to check See Also links render correctly

---

## Guidelines

- Communicate with the user in Traditional Chinese (台灣繁體中文)
- Keep prompts, negative prompts, frontmatter values, and file content in English
- **Step 4 must spawn all six agents in a single message with parallel Agent tool calls** — never serialize, never skip
- Limit each expert's response to ~250 words to control context consumption
- Preserve user judgment — do not auto-apply expert suggestions without `AskUserQuestion` confirmation
- If two experts conflict, surface the conflict explicitly in the consolidated report; do not silently pick one
- When spawning experts, note that they do not see the current conversation — each prompt must be self-contained with the full draft
