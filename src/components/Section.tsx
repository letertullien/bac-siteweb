import type { ReactNode } from 'react'

export type Tone = 'light' | 'dark'

type SectionProps = {
  id?: string
  tone: Tone
  width?: 'md' | 'lg'
  children: ReactNode
}

export function Section({ id, tone, width = 'md', children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 py-24 px-6 ${tone === 'dark' ? 'bg-forest' : 'bg-bg'}`}>
      <div className={`mx-auto ${width === 'lg' ? 'max-w-6xl' : 'max-w-5xl'}`}>{children}</div>
    </section>
  )
}

type SectionHeadingProps = {
  tone: Tone
  eyebrow: string
  title: string
  intro?: ReactNode
}

export function SectionHeading({ tone, eyebrow, title, intro }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className="text-center mb-16">
      <span className={`text-sm font-semibold tracking-widest uppercase ${dark ? 'text-vivid' : 'text-medium'}`}>{eyebrow}</span>
      <h2 className={`mt-3 text-3xl md:text-4xl font-black ${dark ? 'text-white' : 'text-forest'}`}>{title}</h2>
      {intro && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${dark ? 'text-white/60' : 'text-text/65'}`}>{intro}</p>
      )}
    </div>
  )
}
