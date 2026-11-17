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
    desc: 'Un bac trop lourd est dangereux à soulever. Sans mesure de la masse, personne ne le sait avant de le manipuler.',
    accent: '#C8402F',
  },
]

const CONTRIBUTIONS = [
  {
    title: 'Moins de tournées, moins de dépenses',
    desc: "Chaque passage évité, c'est du carburant, des heures de travail et des kilomètres en moins.",
  },
  {
    title: 'Une flotte qui dure plus longtemps',
    desc: "Moins de kilomètres, c'est moins d'usure et d'entretien, et un remplacement des camions qui peut être repoussé.",
  },
  {
    title: "Moins de collectes d'urgence",
    desc: "Un bac qui déborde entraîne des passages imprévus, du nettoyage et des plaintes. Le repérer avant permet de l'éviter.",
  },
  {
    title: "Moins d'accidents de travail",
    desc: "Un bac en surcharge est repéré avant d'être soulevé. Moins de blessures, c'est aussi moins d'absences et de frais.",
  },
  {
    title: 'Des décisions appuyées sur des données',
    desc: 'Le gestionnaire voit quelles zones demandent un passage et peut mieux répartir ses équipes et ses véhicules.',
  },
  {
    title: 'Un investissement modeste',
    desc: 'Du matériel courant et un calibrage guidé en cinq étapes, sans technicien spécialisé.',
  },
  {
    title: 'Une technologie qui dépasse les déchets',
    desc: "Le même principe s'applique aux conteneurs de chantier, aux hôtels et restaurants, aux huiles usagées, aux silos agricoles et aux réservoirs industriels.",
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
          La collecte et le transport représentent une part importante du budget de gestion des matières résiduelles d'une ville. Pourtant, une partie des passages se fait devant des bacs à moitié vides, pendant que d'autres débordent. BacConnect aide à n'envoyer un camion que là où c'est nécessaire.
        </p>
        <p className="mt-3 text-sm leading-relaxed">
          <a href="#resultats" className="underline text-medium hover:text-forest">Voir les résultats obtenus par des villes équipées.</a>
        </p>
        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {CONTRIBUTIONS.map((c, i) => (
            <li key={c.title} className={`flex gap-3 ${i === CONTRIBUTIONS.length - 1 ? 'md:col-span-2' : ''}`}>
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
