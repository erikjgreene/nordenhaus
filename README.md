# Norden Haus - Direct Airbnb Listing & Reviews Extractor and Website

Direct, standalone scraper, data pipeline, and interactive web experience tailored specifically for **Norden Haus** ([Airbnb Listing 652864643401920477](https://www.airbnb.com/rooms/652864643401920477)).

Extracts location metadata, property attributes, space breakdown, categorized amenities, sleeping arrangements, house rules, host bio, and full guest reviews into a clean, website-ready data model.

---

## Starting the Local Web Server

To preview the website locally:

### Option 1: Using npm (Recommended)
```bash
npm run dev
# or
npm run serve
```

### Option 2: Using Python directly
```bash
python3 -m http.server 3000
```

Once running, navigate to:
```
http://localhost:3000
```

---

## Quick Start with `uv` (Scraper & Data Pipeline)

This project uses [`uv`](https://docs.astral.sh/uv/) for Python package management.

### Run the direct extractor:
```bash
uv run scripts/scrape_airbnb_direct.py
```

### Install / sync virtual environment:
```bash
uv sync
```

### (Optional) Add extra packages:
```bash
uv add requests beautifulsoup4
```

---

## Project Assets and Generated Outputs

| File | Format | Usage |
|---|---|---|
| [`data/photos_manifest.json`](file:///Volumes/GIS_Cache/_Projects/nordenhaus/data/photos_manifest.json) | JSON | Curated manifest containing image metadata, categories, titles, captions, dimensions, and orientations. |
| [`data/nordenhaus_listing.json`](file:///Volumes/GIS_Cache/_Projects/nordenhaus/data/nordenhaus_listing.json) | JSON | Directly importable into frontend frameworks (Next.js, Astro, React, Vue, HTML/CSS). |
| [`data/nordenhaus_content.md`](file:///Volumes/GIS_Cache/_Projects/nordenhaus/data/nordenhaus_content.md) | Markdown + Frontmatter | Ideal for CMS import, static site generators, and copy editing. |
| [`src/types/listing.ts`](file:///Volumes/GIS_Cache/_Projects/nordenhaus/src/types/listing.ts) | TypeScript | Type definitions ensuring complete type safety for website components. |

---

## Alternative Scraper Execution Options

### Node.js:
```bash
npm run scrape
# or
node scripts/scrape_airbnb_direct.js
```

---

## Data Sanitization

The scraper includes a recursive sanitization step that removes third-party reviewer and profile media properties from the output data, including:
- `reviewMediaItems`, `reviewerPictureUrl`, `hostPictureUrl`, `pictureUrl`, `photos`, `images`, `thumbnail`, `previewImages`

---

## Extracted Data Sections

1. **Property Specs**: Title, Tagline, Type, 9-Guest / 3-Bedroom / 6-Bed / 2-Bath capacity.
2. **Descriptions**: About the space, The Space breakdown, Guest access, and Northern Michigan notes.
3. **Sleeping Arrangements**: Primary Bedroom (Upper Queen), Bedroom 2 (Lower Queen), Bedroom 3 (Bunk Room with 4 beds).
4. **Amenities**: Categorized into *Living & Comfort*, *Kitchen & Dining*, *Outdoor & Recreation*, *Bed & Bath*, *Parking & Facilities*, and *Safety & Security*.
5. **Location & Proximity**: Drive times to Schuss Mountain Slopes (4 mins), 5 Golf Courses (5 mins), Short's Brew Pub (8 mins), Torch Lake (15 mins), Grass River (12 mins), and Traverse City (50 mins).
6. **House Rules**: Check-in (4 PM), Check-out (10 AM), quiet hours, and property guidelines.
7. **Host Profile**: Rick (Superhost, 100% response rate, within an hour).
8. **Guest Reviews & Ratings**: 10 reviews with star ratings, comments, host responses, and automated sentiment / topic classification.
