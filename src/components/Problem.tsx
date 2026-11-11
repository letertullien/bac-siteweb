import { Section, SectionHeading } from './Section'

const PROBLEMS = [
  {
    icon: '🚛',
    title: 'Trajets inutiles',
    desc: 'Des camions se déplacent pour vider des bacs à moitié pleins. Ces trajets consomment du carburant et produisent des émissions de CO₂.',
    accent: '#1F7A3A',
  },
  {
    icon: '♻️',
    title: 'Bacs qui débordent',
    desc: 'Entre deux passages, certains bacs dépassent leur capacité. Des déchets se retrouvent au sol et les odeurs dérangent les citoyens.',
    accent: '#D9822B',
  },
  {
    icon: '⚠️',
    title: 'Risque pour les employés',
    desc: 'Un bac trop lourd est dangereux à soulever. Sans mesure du poids, personne ne le sait avant de le manipuler.',
    accent: '#C8402F',
  },
]

const CONTRIBUTIONS = [
  {
    title: 'Deux capteurs qui se complètent',
    desc: "Un bac de matières légères peut être plein en volume avec un poids faible. Un bac de matières lourdes peut être trop lourd avant d'être plein. Mesurer les deux évite de rater l'un de ces cas.",
  },
  {
    title: 'Une vue par zone',
    desc: 'Le gestionnaire voit quelles zones demandent un passage. Le seuil se règle zone par zone.',
  },
  {
    title: 'Le poids excessif repéré avant la collecte',
    desc: "Un bac trop lourd apparaît en orange ou en rouge dans le tableau de bord, avant que l'équipe ne le soulève. Il n'y a pas de notification automatique.",
  },
  {
    title: 'Une installation sans expertise technique',
    desc: "Le calibrage guidé en cinq étapes permet d'équiper un nouveau bac sans connaissances en électronique.",
  },
  {
    title: 'Du matériel peu coûteux',
    desc: 'Un microcontrôleur et deux capteurs courants suffisent.',
  },
]

export function Problem() {
  return (
    <Section id="constat" tone="light" width="lg">
      <SectionHeading
        tone="light"
        eyebrow="Le constat"
        title="Une collecte à horaire fixe"
        intro="Aujourd'hui, les camions de collecte passent selon un horaire fixe, que les bacs soient pleins ou presque vides. La collecte du compost devient obligatoire partout au Québec, ce qui augmente la pression sur la logistique de collecte."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {PROBLEMS.map(c => (
          <div key={c.title} className="rounded-2xl p-7 border border-pale bg-white flex flex-col gap-4">
            <div className="text-4xl" aria-hidden="true">{c.icon}</div>
            <h3 className="text-xl font-bold text-forest">{c.title}</h3>
            <p className="text-sm leading-relaxed text-text/70">{c.desc}</p>
            <div className="h-1 w-12 rounded-full mt-auto" style={{ backgroundColor: c.accent }} />
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-pale bg-white p-7 md:p-10">
        <h3 className="text-2xl font-black text-forest">Ce que BacConnect apporte</h3>
        <p className="mt-3 text-sm leading-relaxed text-text/70">
          Notre objectif est de réduire les trajets inutiles en collectant au bon moment.
          Ce n'est pas encore un résultat mesuré : notre prototype sert d'abord à montrer que la mesure du remplissage est fiable.
        </p>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {CONTRIBUTIONS.map(c => (
            <li key={c.title} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vivid" />
              <div>
                <h4 className="font-bold text-forest">{c.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-text/70">{c.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
