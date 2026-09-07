# Stata Okulu — Stata Learning Resource

A static, Turkish-language reference site for learning **Stata**, the statistical software widely used in economics and the social sciences. Includes course outlines, command guides, and runnable code examples.

🇩🇪 German version: [README.de.md](README.de.md)

## What it does

- **Kurslar (Courses):** three course tracks (Basics, Advanced, Special Topics) with real lesson-by-lesson outlines, switchable via buttons.
- **Rehberler (Guides):** quick-reference command cards — importing data, descriptive statistics, data cleaning, plotting.
- **Örnekler (Examples):** two worked code examples (a simple linear regression, a grouped descriptive-statistics table) with real Stata syntax.
- **Kaynaklar (Resources):** links to Stata's official documentation, UCLA IDRE's Stata resources, and the Statalist community forum.
- Animated background of scrolling Stata command names, purely decorative.

## Tech stack

Plain HTML, CSS and vanilla JavaScript. Icons via [Font Awesome](https://fontawesome.com/) (CDN).

## Running it

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Notes

The original source had only section headings with `<!-- ... -->` placeholder comments and no real content. Course outlines, guide cards, code examples, and resource links were written before publishing.
