# Norden Haus — Website

> Official web experience for **Norden Haus**, a modern 4-season Nordic chalet in Schuss Mountain at Shanty Creek Resort (Bellaire, Michigan).

🌐 **Live Website:** [https://erikjgreene.github.io/nordenhaus/](https://erikjgreene.github.io/nordenhaus/)  
🏡 **Airbnb Listing:** [Airbnb Room 652864643401920477](https://www.airbnb.com/rooms/652864643401920477)

---

## Overview

Norden Haus is an authentic 4-season vacation chalet tucked quietly into the hardwoods of Schuss Mountain, minutes from championship golf, downhill skiing, Short's Brewing, and Torch Lake. 

This repository contains the complete frontend website, optimized for fast static hosting via GitHub Pages.

---

## Key Features

- **Interactive Photo Gallery**: Curated 30-photo authentic showcase with category filters (*Exterior, Living & Hearth, Kitchen & Dining, Bedrooms & Bathrooms, Deck & Firepit, Local Area*) and full-screen lightbox modal with keyboard navigation.
- **Detailed Space & Sleeping Matrix**: Breakdown of 3 bedrooms, 6 beds, and 2 full baths (sleeps up to 9 guests).
- **Amenities & Highlights**: Categorized amenities list (Living & Comfort, Kitchen, Outdoor, Safety, Connectivity).
- **Northern Michigan 4-Season Guide**: Verified drive times and seasonal attraction cards (Schuss Mountain Ski Slopes, Shanty Creek Golf, Short's Brewing, Torch Lake Sandbar, Mammoth Distilling, Grass River Natural Area).
- **Booking & Availability CTA**: Seamless booking links directly to Airbnb.
- **Analytics & SEO**: Google Tag Manager integration (`GTM-N6BGQK6W`), Open Graph metadata, semantic HTML5, and responsive typography.

---

## Project Structure

```
nordenhaus/
├── index.html                    # Semantic HTML5 markup
├── styles.css                    # Modern CSS design system & responsive styling
├── app.js                        # Photo gallery data, category filtering, lightbox & interactions
├── nordenhaus_photos/            # 30 authentic high-resolution property & area photos
├── data/
│   └── photos_manifest.json      # Structured photo metadata, dimensions, and captions
├── package.json                  # Local preview scripts & project metadata
├── .gitignore                    # Web-focused gitignore
└── README.md
```

---

## Local Development

To run and preview the website locally:

### Option 1: Using npm (Recommended)
```bash
npm run dev
# or
npm run serve
```

### Option 2: Using Python
```bash
python3 -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment (GitHub Pages)

This website is deployed automatically via GitHub Pages from the `main` branch.

1. In GitHub repo settings, navigate to **Pages**.
2. Set the Source to **Deploy from a branch**.
3. Select `main` branch and `/ (root)` folder.
4. Save to trigger the GitHub Pages automated build.

---

## Technologies Used

- **HTML5**: Semantic, accessible document structure.
- **CSS3**: Custom design tokens, CSS Grid, Flexbox, smooth transitions.
- **JavaScript (ES6+)**: Lightbox engine, interactive filters, mobile menu.
- **Lucide Icons**: Lightweight, crisp SVG iconography.
- **Typography**: Google Fonts (*Fraunces* display serif and *Plus Jakarta Sans* body sans).
- **Analytics**: Google Tag Manager.

---

## License

© 2026 Erik Greene. All rights reserved.
