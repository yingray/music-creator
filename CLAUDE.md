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
- `knowledge/` — Suno reference docs (genres, moods, instruments, model practices)
- `.claude/skills/` — Claude Code skills for prompt assistance

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build + Pagefind index
- `npm run preview` — Preview production build

## Adding a New Prompt
Create a `.md` file in `src/content/prompts/` with the required frontmatter schema defined in `src/content.config.ts`.

## Skills
- `/suno-prompt-craft` — Generate Suno prompts from a description
- `/suno-negative-prompt` — Help write effective negative prompts
- `/suno-prompt-review` — Review and optimize existing prompts
