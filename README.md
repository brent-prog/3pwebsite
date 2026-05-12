# 3P Solutions Website

A clean, single-page Next.js website for 3P Solutions / Brent Pattison, designed for deployment from GitHub to Vercel.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload or push these project files to the repository.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the default settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: leave blank
6. Click **Deploy**.

## Edit content

Most of the homepage copy lives in:

```text
app/page.tsx
```

Update email, phone, service copy, and CTAs directly there.

## Recommended next improvements

- Replace the simple `3P` text mark with the real 3P logo in `/public`.
- Add a real scheduling link to the CTA buttons, such as Calendly, HubSpot Meetings, or another booking page.
- Add analytics after publishing, such as Vercel Analytics, Plausible, or Google Analytics.
- Add a downloadable one-pager PDF link once the final PDF is ready.
