import appScreenshot1 from '../assets/img7.png'
import appScreenshot2 from '../assets/img8.png'
import { Placeholder } from './Placeholder'
import { Section, SectionHeading } from './Section'

type Media = { kind: 'image' | 'video'; src: string } | null

const FEATURES: { icon: string; title: string; desc: string; media: Media }[] = [
  {
    icon: '📊',
    title: 'Tableau de bord',
    desc: 'Nombre de bacs à vider, zones critiques en premier, et vue animée du bac prototype avec son poids et son niveau.',
    media: null,
  },
  {
    icon: '📋',
    title: 'Liste des bacs',
    desc: 'Chaque bac a une bordure verte, orange ou rouge selon son état. Un filtre affiche seulement les bacs prêts pour la collecte.',
    media: null,
  },
  {
    icon: '⚙️',
    title: 'Assistant de calibrage',
    desc: 'Calibrage guidé en 5 étapes, avec lecture directe du capteur ou saisie manuelle des valeurs.',
    media: null,
  },
  {
    icon: '🗺️',
    title: 'Gestion des zones',
    desc: 'Création des zones et réglage du seuil qui fait passer une zone en critique.',
    media: null,
  },
]

function FeatureMedia({ media, title }: { media: Media; title: string }) {
  if (!media) {
    return <Placeholder tone="dark" label={`capture ou courte vidéo : ${title.toLowerCase()}`} className="aspect-[9/16] max-h-80 w-full" />
  }
  if (media.kind === 'video') {
    return <video src={media.src} className="aspect-[9/16] max-h-80 w-full rounded-xl object-cover" autoPlay muted loop playsInline aria-label={title} />
  }
  return <img src={media.src} alt={title} className="aspect-[9/16] max-h-80 w-full rounded-xl object-cover" />
}

export function AppShowcase() {
  return (
    <Section id="application" tone="dark" width="lg">
      <SectionHeading
        tone="dark"
        eyebrow="L'outil de gestion"
        title="L'application mobile"
        intro="Une application React Native / Expo pour iOS et Android. Elle lit l'état des bacs sur le serveur chaque seconde et l'affiche sans le recalculer."
      />
      <div className="flex justify-center gap-4 min-w-0">
        <div className="flex-1 min-w-0 max-w-44 rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
          <img src={appScreenshot1} alt="Tableau de bord de l'application" className="w-full" />
        </div>
        <div className="flex-1 min-w-0 max-w-44 rounded-3xl overflow-hidden shadow-2xl border-4 self-end" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
          <img src={appScreenshot2} alt="Détail du bac prototype dans l'application" className="w-full" />
        </div>
      </div>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map(f => (
          <div key={f.title} className="flex flex-col gap-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <FeatureMedia media={f.media} title={f.title} />
            <div className="flex gap-3">
              <span className="text-2xl flex-shrink-0" aria-hidden="true">{f.icon}</span>
              <div>
                <h3 className="font-bold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
