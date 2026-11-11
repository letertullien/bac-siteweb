import { Section, SectionHeading } from './Section'

const STEPS = [
  {
    step: '01',
    title: 'Mesurer',
    icon: '📡',
    desc: "Le bac lit son poids avec la balance HX711 et la hauteur des déchets avec le capteur ultrasonique HC-SR04. Il envoie ses mesures toutes les 500 ms.",
  },
  {
    step: '02',
    title: 'Analyser',
    icon: '🖥️',
    desc: 'Le serveur convertit les mesures en kilogrammes et en pourcentage de remplissage. Il applique ensuite la règle de ramassage.',
  },
  {
    step: '03',
    title: 'Agir',
    icon: '📱',
    desc: "L'application affiche l'état de chaque bac, rafraîchi chaque seconde. Le gestionnaire voit quels bacs vider et quelles zones sont critiques.",
  },
]

export function HowItWorks() {
  return (
    <Section id="comment" tone="light">
      <SectionHeading tone="light" eyebrow="Fonctionnement" title="Comment ça marche ?" />
      <div className="grid md:grid-cols-3 gap-10 md:gap-0 relative">
        <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #1F7A3A 0, #1F7A3A 8px, transparent 8px, transparent 16px)'
        }} />
        {STEPS.map((s, i) => (
          <div key={s.step} className={`relative flex flex-col items-center text-center px-6 ${i === 1 ? 'md:scale-105' : ''}`}>
            <div className="w-28 h-28 rounded-full flex items-center justify-center text-5xl mb-6 border-4 bg-pale" style={{ borderColor: 'rgba(31,122,58,0.3)' }} aria-hidden="true">
              {s.icon}
            </div>
            <div className="text-xs font-bold mb-2 text-orange">ÉTAPE {s.step}</div>
            <h3 className="text-xl font-black text-forest mb-4">{s.title}</h3>
            <p className="text-sm leading-relaxed text-text/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
