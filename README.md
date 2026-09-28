# Hello Michael

A landing page with an email signup form, built with React, Vite, and [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html).

## Development

```sh
npm install
npm run dev     # start the dev server
npm run build   # type-check and build for production
npm run lint    # lint with oxlint
```

## Project structure

```
src/
  components/          Reusable UI components, one folder each
    Button/
      Button.tsx       Wraps React Aria's Button
      Button.css       Its styles
    TextField/
      TextField.tsx    Wraps React Aria's TextField, Label, Input, FieldError
      TextField.css
    index.ts           Import components from here: `import { Button } from './components'`
  styles/
    tokens.css         Colors, fonts, and radii shared by all components
  App.tsx / App.css    The landing page and its layout
  pages/               The component gallery page
```

## Component gallery

With `npm run dev` running, open [localhost:5173/components.html](http://localhost:5173/components.html) to see every component in each of its states, plus the design tokens. When you add a component or state, add an example to `src/pages/Showcase.tsx`.

Component styles target the `data-*` attributes React Aria sets for each state (`[data-hovered]`, `[data-pressed]`, `[data-focus-visible]`, `[data-invalid]`, …). See the [React Aria styling guide](https://react-spectrum.adobe.com/react-aria/styling.html).

To add a component, create `src/components/<Name>/<Name>.tsx` and `<Name>.css`, then export it from `src/components/index.ts`.

Submitted emails are currently only logged to the browser console — see the `TODO` in `src/App.tsx`.
