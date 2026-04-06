# Suno Music Prompt Notes

A personal Astro website for managing Suno Music prompts and negative prompts.

## Tech Stack
- **Framework**: Astro 6 (static site)
- **Styling**: Tailwind CSS 4
- **Search**: Pagefind (post-build indexing)
- **Storage**: Markdown files with Content Collections
- **Node**: >= 22.12.0 (use `fnm use` if needed)

## Project Structure
- `src/content/prompts/` — Prompt note markdown files
- `src/content/templates/` — Reusable prompt templates
- `src/content.config.ts` — Content Collection schemas (Zod)
- `knowledge/` — Suno reference docs (genres, moods, instruments, model practices, **v5 metatags**)
- `.claude/skills/` — Claude Code skills for prompt assistance

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build + Pagefind index
- `npm run preview` — Preview production build

## Adding a New Prompt
Create a `.md` file in `src/content/prompts/` with the required frontmatter schema defined in `src/content.config.ts`.

### v5 Schema Fields
- `suno_model` defaults to `v5` (existing v4 prompts explicitly set `v4`)
- Optional fields: `bpm`, `vocal_style`, `use_case`, `metatags` (boolean)
- See `knowledge/suno-metatags.md` for the v5 metatags reference
- See `knowledge/suno-model-practices.md` for v5/v5.5 best practices

## Skills
- `/suno-prompt-craft` — Generate Suno prompts from a description
- `/suno-negative-prompt` — Help write effective negative prompts
- `/suno-prompt-review` — Review and optimize existing prompts
