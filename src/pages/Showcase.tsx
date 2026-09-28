import type { ReactNode } from 'react'
import { Button, TextField } from '../components'
import './Showcase.css'

// Token names defined in src/styles/tokens.css. Values are read from the CSS, so only names live here.
const colorTokens = [
  '--color-text',
  '--color-border',
  '--color-surface',
  '--color-primary',
  '--color-primary-hover',
  '--color-primary-pressed',
  '--color-focus-ring',
  '--color-danger',
  '--color-danger-ring',
  '--color-success',
]
const fontSizeTokens = ['--font-size-sm', '--font-size-md']
const radiusTokens = ['--radius-md']

function tokenValue(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="showcase-section">
      <h2>{title}</h2>
      {description && <p className="showcase-description">{description}</p>}
      <div className="showcase-grid">{children}</div>
    </section>
  )
}

/** One example: a live component with its name and the props that produce it. */
function Example({ name, props, children }: { name: string; props?: string; children: ReactNode }) {
  return (
    <figure className="showcase-example">
      <div className="showcase-preview">{children}</div>
      <figcaption>
        <strong>{name}</strong>
        {props && <code>{props}</code>}
      </figcaption>
    </figure>
  )
}

function Showcase() {
  return (
    <main className="showcase">
      <header className="showcase-header">
        <h1>Components</h1>
        <p>
          Every component in <code>src/components</code>, in each state it supports. Examples are live: hover, click,
          tab to, and type into them to see interactive states.
        </p>
        <a href="/">← Back to landing page</a>
      </header>

      <Section title="Colors" description="src/styles/tokens.css">
        {colorTokens.map((name) => (
          <Example key={name} name={name} props={tokenValue(name)}>
            <div className="swatch" style={{ background: `var(${name})` }} />
          </Example>
        ))}
      </Section>

      <Section title="Typography & shape" description="src/styles/tokens.css">
        {fontSizeTokens.map((name) => (
          <Example key={name} name={name} props={tokenValue(name)}>
            <span style={{ fontSize: `var(${name})` }}>The quick brown fox</span>
          </Example>
        ))}
        {radiusTokens.map((name) => (
          <Example key={name} name={name} props={tokenValue(name)}>
            <div className="radius-sample" style={{ borderRadius: `var(${name})` }} />
          </Example>
        ))}
      </Section>

      <Section
        title="Button"
        description="src/components/Button — hover, press, and keyboard-focus (Tab) states appear on interaction."
      >
        <Example name="Default">
          <Button>Submit</Button>
        </Example>
        <Example name="Disabled" props="isDisabled">
          <Button isDisabled>Submit</Button>
        </Example>
      </Section>

      <Section title="TextField" description="src/components/TextField — focus state appears on interaction.">
        <Example name="With label" props='label="Email"'>
          <TextField label="Email" />
        </Example>
        <Example name="With placeholder" props='placeholder="you@example.com"'>
          <TextField label="Email" placeholder="you@example.com" />
        </Example>
        <Example name="Hidden label" props='aria-label="Email"'>
          <TextField aria-label="Email" placeholder="you@example.com" />
        </Example>
        <Example name="Filled" props='defaultValue="…"'>
          <TextField label="Email" defaultValue="michael@example.com" />
        </Example>
        <Example name="Required" props='isRequired type="email"'>
          <TextField label="Email" type="email" isRequired />
        </Example>
        <Example name="Invalid" props='isInvalid errorMessage="…"'>
          <TextField label="Email" defaultValue="not-an-email" isInvalid errorMessage="Enter a valid email address." />
        </Example>
        <Example name="Read-only" props="isReadOnly">
          <TextField label="Email" defaultValue="michael@example.com" isReadOnly />
        </Example>
        <Example name="Disabled" props="isDisabled">
          <TextField label="Email" defaultValue="michael@example.com" isDisabled />
        </Example>
      </Section>
    </main>
  )
}

export default Showcase
