import { useState } from 'react'
import { useReveal } from '../hooks'
import { SITE } from '../data/content'
import { en } from '../locales/en'

const t = en.contact

export function Contact() {
  const formRef = useReveal()
  const infoRef = useReveal()
  const [sent, setSent] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = fields
    const body = `Hi Maniraja,\n\n${message}\n\n— ${name} (${email})`
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject || t.form.defaultSubject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <main className="pt-20">
      <section className="bg-mint py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="hero-enter text-xs font-medium uppercase tracking-[0.2em] text-amber mb-4"
            style={{ animationDelay: '0.05s' }}
          >
            {t.header.eyebrow}
          </p>
          <h1
            className="hero-enter text-5xl sm:text-6xl font-bold text-navy leading-tight mb-6"
            style={{ animationDelay: '0.2s' }}
          >
            {t.header.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p
            className="hero-enter text-lg text-navy/75 max-w-md leading-relaxed"
            style={{ animationDelay: '0.35s' }}
          >
            {t.header.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div ref={formRef} className="reveal">
              {sent ? (
                <div className="flex flex-col gap-4 py-12">
                  <span className="text-4xl">{t.sent.emoji}</span>
                  <h2 className="text-2xl font-bold text-navy">{t.sent.title}</h2>
                  <p className="text-navy/70 leading-relaxed">
                    {t.sent.body}{' '}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-forest font-medium hover:text-amber transition-colors"
                    >
                      {SITE.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="self-start text-sm text-navy/50 hover:text-navy underline underline-offset-4 transition-colors mt-2"
                  >
                    {t.sent.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      id="name"
                      label={t.form.nameLabel}
                      type="text"
                      placeholder={t.form.namePlaceholder}
                      required
                      onChange={handleChange}
                      value={fields.name}
                    />
                    <FormField
                      id="email"
                      label={t.form.emailLabel}
                      type="email"
                      placeholder={t.form.emailPlaceholder}
                      required
                      onChange={handleChange}
                      value={fields.email}
                    />
                  </div>
                  <FormField
                    id="subject"
                    label={t.form.subjectLabel}
                    type="text"
                    placeholder={t.form.subjectPlaceholder}
                    onChange={handleChange}
                    value={fields.subject}
                  />

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-navy">
                      {t.form.messageLabel}{' '}
                      <span className="text-amber" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder={t.form.messagePlaceholder}
                      value={fields.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-blush/30 text-navy placeholder:text-navy/30 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber/40 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-blush text-sm font-medium rounded-full hover:bg-forest transition-colors duration-200"
                  >
                    {t.form.submit}
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>

            <div
              ref={infoRef}
              className="reveal flex flex-col gap-8 lg:pt-2"
              style={{ transitionDelay: '0.15s' }}
            >
              <ContactInfo label={t.info.email} value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactInfo
                label={t.info.phone}
                value={SITE.phone}
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              />
              <ContactInfo label={t.info.basedIn} value={SITE.location} />
              <ContactInfo
                label={t.info.linkedin}
                value="linkedin.com/in/A-Maniraja"
                href={SITE.linkedin}
              />
              <ContactInfo label={t.info.availability} value={t.info.availabilityValue} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FormField({ id, label, type, placeholder, required, onChange, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {required && (
          <span className="text-amber ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border border-border bg-blush/30 text-navy placeholder:text-navy/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 transition"
      />
    </div>
  )
}

function ContactInfo({ label, value, href }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy/50 mb-1">{label}</p>
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="text-navy font-medium hover:text-forest transition-colors duration-200"
        >
          {value}
        </a>
      ) : (
        <p className="text-navy font-medium">{value}</p>
      )}
    </div>
  )
}
