# Premium Interactive Love Letter

A handcrafted, single-page love letter website built with HTML5, CSS3, and vanilla JavaScript. There is no framework, build step, package install, routing, audio, modal, or generated template layer.

## Architecture

- `index.html` defines the semantic page structure: the quiet opening screen, CSS-built envelope, and hidden letter region.
- `style.css` contains the full visual system: design tokens, spacing, paper texture, layered envelope, responsive rules, and reduced-motion support.
- `script.js` stores the letter in one template string, converts blank-line-separated text into paragraphs, runs the opening sequence, and reveals paragraphs with `IntersectionObserver`.

## Customize The Letter

Edit the `letter` template string in `script.js`. Blank lines become paragraph breaks automatically:

```js
const letter = `
My love,

Your next paragraph here.
`;
```

Each paragraph is rendered as:

```html
<p class="paragraph">...</p>
```

## Run

Open `index.html` directly in a browser. For local development, you can also serve the folder:

```bash
python3 -m http.server 8791
```

Then visit `http://127.0.0.1:8791`.
