# Daniel Thomas Portfolio

A premium personal portfolio for Daniel Thomas, showcasing work at the intersection of materials engineering, computational materials science, AI, and software development.

## Purpose

This portfolio introduces Daniel as a Materials and Metallurgical Engineering graduate building solutions around materials informatics, machine learning, sustainable materials, and practical software.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Environment variables

Copy the sample environment file:

```bash
cp .env.example .env.local
```

Then update values if needed:

```env
NEXT_PUBLIC_SITE_URL=https://danielthomas.dev
```

## Deployment to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` if you want to override the default domain.
4. Deploy the project.

## Update portfolio content

Most portfolio content lives in:

- `src/data/portfolio.ts`

This file centralizes:

- profile details and headings
- navigation items
- skills
- projects
- education
- research interests
- contact URLs

## Add your CV

Place your final CV PDF here:

`/public/cv/Daniel-Thomas-CV.pdf`

The site is already prepared for that file path.

## Add your profile photo

Place your profile image here:

`/public/images/profile.jpg`

If no photo is present, the site shows a polished placeholder instead of a broken image.

## Update social links

Edit the contact fields in `src/data/portfolio.ts`.

## Notes

- Do not commit secrets or private credentials.
- Keep this site public-facing and easy to update.
- Use the portfolio as a clean foundation for future project and publication updates.
