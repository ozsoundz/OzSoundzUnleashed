# Oz Soundz Unleashed — GitHub Pages Site

The official redesigned website for **Oz Soundz Unleashed** — the independent voice of Australian music and audio.

Built as a static multi-page site for GitHub Pages deployment.

---

## 🗂 Site Structure

```
/
├── index.html                          ← Homepage
├── css/
│   └── main.css                        ← Global styles
├── js/
│   ├── components.js                   ← Nav & footer injection
│   └── main.js                         ← Shared interactions
└── pages/
    ├── about.html                      ← About The Show
    ├── host.html                       ← The Host (Jason "Plummo")
    ├── episodes.html                   ← All Episodes (Ep 01–10+)
    ├── guests.html                     ← Show Guests
    ├── sponsors.html                   ← Sponsors & Products
    ├── contact.html                    ← Contact Us
    ├── submit-guest.html               ← Apply to Be a Guest ★ NEW
    ├── resources.html                  ← Artist Resources ★ NEW
    ├── the-oz-soundz-group/
    │   ├── index.html                  ← Group Overview
    │   ├── music-audio.html            ← Oz Soundz Music & Audio
    │   ├── studios.html                ← Oz Soundz Studios
    │   └── records.html                ← Oz Soundz Records
    └── our-media/
        ├── index.html                  ← Our Media overview
        └── social-media.html           ← Social Media
```

---

## 🚀 Deploy to GitHub Pages

### Option 1 — GitHub UI

1. Create a new GitHub repository (e.g. `ozsoundz-unleashed`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Set Source to `main` branch, root `/`
5. Save — your site will be live at `https://yourusername.github.io/ozsoundz-unleashed/`

### Option 2 — Git CLI

```bash
git init
git add .
git commit -m "Initial site build"
git remote add origin https://github.com/yourusername/ozsoundz-unleashed.git
git push -u origin main
# Then enable GitHub Pages in repository Settings → Pages
```

---

## ✏️ Customisation Checklist

Before going live, update the following:

### In `js/components.js`
- Update Spotify show URL (search for `open.spotify.com/show/`)
- Update Apple Podcasts URL

### In `index.html`
- Update the latest episode strip with the current episode

### Contact Form
- The contact form in `pages/contact.html` and `pages/submit-guest.html` currently shows a demo alert
- For production, integrate with **[FormSpree](https://formspree.io)** or **Netlify Forms**:
  - FormSpree: change `<form>` action to `https://formspree.io/f/YOUR_FORM_ID`
  - Remove the JavaScript form interceptor once connected

### Fonts
- Google Fonts are loaded via CDN — requires internet connection
- For offline use, download and self-host Bebas Neue, Space Mono, and Barlow Condensed

### Images
- The host profile currently uses initials "JP" as a placeholder
- Replace with actual photo by adding `<img>` inside the `.guest-avatar` divs

---

## 🎨 Design System

**Aesthetic:** Underground Australian music — raw, bold, authentic. Dark background, gold accents, monospace type.

| Token | Value | Usage |
|-------|-------|-------|
| `--black` | `#0a0a0a` | Page background |
| `--gold` | `#c9a227` | Primary accent |
| `--accent` | `#ff6b35` | Secondary accent |
| `--green` | `#00b894` | Active/live status |
| `--font-display` | Bebas Neue | Headlines |
| `--font-mono` | Space Mono | Labels, UI, code |
| `--font-body` | Barlow Condensed | Body copy |

---

## 📄 Pages Reference

| Page | URL | Status |
|------|-----|--------|
| Home | `/index.html` | ✅ |
| About The Show | `/pages/about.html` | ✅ |
| The Host | `/pages/host.html` | ✅ |
| Episodes | `/pages/episodes.html` | ✅ All 10+ eps |
| Show Guests | `/pages/guests.html` | ✅ |
| Sponsors & Products | `/pages/sponsors.html` | ✅ |
| Contact Us | `/pages/contact.html` | ✅ |
| Be a Guest | `/pages/submit-guest.html` | ✅ NEW |
| Artist Resources | `/pages/resources.html` | ✅ NEW |
| The Oz Soundz Group | `/pages/the-oz-soundz-group/index.html` | ✅ |
| Music & Audio | `/pages/the-oz-soundz-group/music-audio.html` | ✅ |
| Studios | `/pages/the-oz-soundz-group/studios.html` | ✅ |
| Records | `/pages/the-oz-soundz-group/records.html` | ✅ |
| Our Media | `/pages/our-media/index.html` | ✅ |
| Social Media | `/pages/our-media/social-media.html` | ✅ |

---

## 📡 Social & Contact

- **Email:** unleashed@ozsoundz.com.au
- **Facebook:** facebook.com/ozsoundz
- **Instagram:** @ozsoundzunleashed
- **TikTok:** @ozsoundz
- **YouTube:** @ozsoundz
- **Spotify:** Search "Oz Soundz Unleashed"
- **Apple Podcasts:** Search "Oz Soundz Unleashed"

---

*Built with 🎸 for the Australian underground music scene.*
