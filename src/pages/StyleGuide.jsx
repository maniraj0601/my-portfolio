import { Button, Card, CardHeader, CardBody, Container, Input } from '../components/ui'

export function StyleGuide() {
  return (
    <Container className="py-8 space-y-12">
      <section aria-labelledby="colors-heading">
        <h2 id="colors-heading" className="text-2xl font-bold text-foreground mb-6">
          Colors
        </h2>

        <div className="space-y-6">
          <ColorPalette name="Primary" prefix="primary" />
          <ColorPalette name="Secondary" prefix="secondary" />
          <ColorPalette name="Accent" prefix="accent" />

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Semantic</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ColorSwatch name="Success" className="bg-success" />
              <ColorSwatch name="Warning" className="bg-warning" />
              <ColorSwatch name="Error" className="bg-error" />
              <ColorSwatch name="Info" className="bg-info" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Surface</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ColorSwatch name="Background" className="bg-background border" />
              <ColorSwatch name="Surface" className="bg-surface border" />
              <ColorSwatch name="Surface Alt" className="bg-surface-alt border" />
              <ColorSwatch name="Border" className="bg-border" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="typography-heading">
        <h2 id="typography-heading" className="text-2xl font-bold text-foreground mb-6">
          Typography
        </h2>
        <div className="space-y-4">
          <p className="text-5xl font-bold">Heading 1</p>
          <p className="text-4xl font-bold">Heading 2</p>
          <p className="text-3xl font-semibold">Heading 3</p>
          <p className="text-2xl font-semibold">Heading 4</p>
          <p className="text-xl font-medium">Heading 5</p>
          <p className="text-lg">Large text</p>
          <p className="text-base">Body text - The quick brown fox jumps over the lazy dog.</p>
          <p className="text-sm text-muted">Small text - Secondary information</p>
          <p className="text-xs text-muted">Extra small - Fine print</p>
          <p className="font-mono text-sm">Monospace text for code</p>
        </div>
      </section>

      <section aria-labelledby="buttons-heading">
        <h2 id="buttons-heading" className="text-2xl font-bold text-foreground mb-6">
          Buttons
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">States</h3>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="inputs-heading">
        <h2 id="inputs-heading" className="text-2xl font-bold text-foreground mb-6">
          Inputs
        </h2>
        <div className="max-w-md space-y-4">
          <Input label="Default Input" placeholder="Enter text..." />
          <Input label="With Error" error="This field is required" placeholder="Enter text..." />
          <Input label="Disabled" disabled placeholder="Cannot edit" />
        </div>
      </section>

      <section aria-labelledby="cards-heading">
        <h2 id="cards-heading" className="text-2xl font-bold text-foreground mb-6">
          Cards
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-foreground">Card Title</h3>
            </CardHeader>
            <CardBody>
              <p className="text-muted">
                Card content goes here. This is a simple card with header and body.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="font-semibold text-foreground mb-2">Simple Card</h3>
              <p className="text-muted">A card with just body content, no header.</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Centered Card</h3>
              <p className="text-sm text-muted mt-1">With custom layout</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section aria-labelledby="spacing-heading">
        <h2 id="spacing-heading" className="text-2xl font-bold text-foreground mb-6">
          Spacing Scale
        </h2>
        <div className="space-y-2">
          {[1, 2, 3, 4, 6, 8, 12, 16].map(size => (
            <div key={size} className="flex items-center gap-4">
              <span className="w-12 text-sm text-muted">{size * 4}px</span>
              <div className={`h-4 bg-primary-500 rounded`} style={{ width: `${size * 16}px` }} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="breakpoints-heading">
        <h2 id="breakpoints-heading" className="text-2xl font-bold text-foreground mb-6">
          Responsive Breakpoints
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 font-medium">Prefix</th>
                <th className="py-3 pr-4 font-medium">Min Width</th>
                <th className="py-3 font-medium">Usage</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">sm:</td>
                <td className="py-3 pr-4">640px</td>
                <td className="py-3">Large phones, small tablets</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">md:</td>
                <td className="py-3 pr-4">768px</td>
                <td className="py-3">Tablets</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">lg:</td>
                <td className="py-3 pr-4">1024px</td>
                <td className="py-3">Laptops, small desktops</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-mono text-sm">xl:</td>
                <td className="py-3 pr-4">1280px</td>
                <td className="py-3">Desktops</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-sm">2xl:</td>
                <td className="py-3 pr-4">1536px</td>
                <td className="py-3">Large desktops</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  )
}

function ColorPalette({ name, prefix }) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  return (
    <div>
      <h3 className="text-lg font-medium text-foreground mb-3">{name}</h3>
      <div className="grid grid-cols-6 sm:grid-cols-11 gap-2">
        {shades.map(shade => (
          <div key={shade} className="text-center">
            <div
              className={`h-10 rounded-lg bg-${prefix}-${shade}`}
              aria-label={`${name} ${shade}`}
            />
            <span className="text-xs text-muted mt-1 block">{shade}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ColorSwatch({ name, className }) {
  return (
    <div className="text-center">
      <div className={`h-12 rounded-lg ${className}`} aria-label={name} />
      <span className="text-sm text-muted mt-1 block">{name}</span>
    </div>
  )
}
