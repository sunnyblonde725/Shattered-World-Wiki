---
title: Wiki Setup & Maintenance
---

# Wiki Setup & Maintenance

## The Live Site

**URL:** https://shattered-world-wiki.netlify.app

Hosted on Netlify. Pulls from GitHub. Currently public (no password) — only people you share the link with can find it.

---

## GitHub

**Repo:** https://github.com/sunnyblonde725/Shattered-World-Wiki.git
**Branch:** v4
**Personal Access Token:** *(stored locally — do not write here)*
*(Expires ~March 2027 — regenerate at GitHub → Settings → Developer settings → Personal access tokens)*

---

## How to Update the Site After a New Session

After session notes and documents are updated in Obsidian, run these commands to push the changes to the live site:

```bash
cd ~/quartz
rm -rf content
mkdir content
cp -r "/Users/lolojolo/Library/Mobile Documents/iCloud~md~obsidian/Documents/SunnyMind/A Shattered World/." content/
git add content
git commit -m "Update content after Session N"
git push origin v4
```

Replace `Session N` with the actual session number. Netlify will automatically rebuild and publish the site within a minute or two.

---

## How It Works

- **Quartz** is installed at `~/quartz/` — it's the thing that turns Obsidian markdown into a website
- **GitHub** stores the code and content
- **Netlify** watches GitHub and rebuilds the site automatically whenever you push

---

## Cloudflare Access (Future Option)

If you ever want to password-protect the site for free:
- Create a Cloudflare account
- Buy a custom domain (~$12/year)
- Point the domain through Cloudflare
- Use Cloudflare Access (free up to 50 users) to require email verification before visitors can enter

Not needed right now — the site is unlisted enough for a campaign wiki.
