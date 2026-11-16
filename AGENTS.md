<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## FoPet UI rules

- Use Astryx as the shared React design system and keep its theme provider configured in `src/app/providers.tsx`.
- Do not add AI-generated icon packs, emoji icons, hand-drawn SVG icons, or mixed icon families.
- When an icon is needed, use the existing `lucide-react` set consistently. Decorative icons must have `aria-hidden="true"`; action icons need an accessible label.
- Keep the FoPet palette, rounded controls, and existing Tailwind/shadcn composition consistent with the Astryx theme.
