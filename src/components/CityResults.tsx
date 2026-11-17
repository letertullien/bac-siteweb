import { Section, SectionHeading } from './Section'

type Link = { label: string; href: string }

type City = {
  city: string
  country: string
  deployment: string
  results: string[]
  roi: string
  sources: Link[]
}

const KEY_FIGURES = [
  { value: '71 %', label: 'de collectes en moins', city: 'Stralsund' },
  { value: '54 %', label: 'de kilomètres parcourus en moins', city: 'Stralsund' },
  { value: "Moins d'un an", label: "pour rentabiliser l'investissement", city: 'Stralsund' },
]

const CITIES: City[] = [
  {
    city: 'Stralsund',
    country: 'Allemagne',
    deployment: 'Capteurs sur les poubelles de rue',
    results: [
      'Collectes hebdomadaires passées de 1 548 à 445 (71 % de moins)',
      'Distance hebdomadaire de 1 677 à 779 km (54 % de moins)',
      "30 % d'heures de travail en moins",
    ],
    roi: "Moins d'un an",
    sources: [{ label: 'Étude de cas du fournisseur', href: 'https://britanniaiot.co.uk/results/stralsund-smart-street-bins/' }],
  },
  {
    city: 'Belfast',
    country: 'Irlande du Nord',
    deployment: "Projet pilote à l'hôtel de ville, puis extension",
    results: ['Fréquence de collecte réduite de plus de 80 % durant le pilote'],
    roi: 'Non publié',
    sources: [{ label: 'Conseil municipal de Belfast', href: 'https://www.belfastcity.gov.uk/news/belfast-city-council-expands-smart-bin-roll-out-fo' }],
  },
  {
    city: 'Édimbourg',
    country: 'Écosse',
    deployment: '11 000 capteurs, dans le cadre de projets de ville intelligente financés en partie par le Fonds européen de développement régional',
    results: ['30 % de baisse des coûts de collecte', '50 % de plaintes en moins pour des bacs qui débordent'],
    roi: 'Non publié',
    sources: [
      { label: "Ville d'Édimbourg", href: 'https://www.edinburgh.gov.uk/bins-recycling/smart-bin-sensors' },
      { label: 'Étude de cas du fournisseur', href: 'https://www.smartends.com.au/post/case-study-the-city-of-edinburgh-council-smartbin-sensor-project' },
    ],
  },
  {
    city: 'Cambridge',
    country: 'Angleterre',
    deployment: 'Capteurs sur les poubelles publiques',
    results: ['Tournées quotidiennes réduites de six à cinq'],
    roi: 'Non publié',
    sources: [
      {
        label: 'Rapport du conseil de Cambridge',
        href: 'https://democracy.cambridge.gov.uk/documents/s71219/Scrutiny%20Report%20on%20Task%20and%20Finish%20work%20for%20Litter%20Strategyv4.pdf',
      },
    ],
  },
]

const LINK_CLASS = 'underline text-medium hover:text-forest'

function ExternalLink({ label, href }: Link) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      {label}
    </a>
  )
}

function Sources({ sources }: { sources: Link[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {sources.map(s => (
        <li key={s.href}>
          <ExternalLink {...s} />
        </li>
      ))}
    </ul>
  )
}

function Results({ results }: { results: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {results.map(r => (
        <li key={r} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-vivid" />
          <span>{r}</span>
        </li>
      ))}
    </ul>
  )
}


export function CityResults() {
  return (
    <Section id="resultats" tone="pale" width="lg">
      <SectionHeading
        tone="pale"
        eyebrow="Résultats"
        title="Ce que montrent les villes équipées"
        intro="Plusieurs villes ont déjà équipé leurs bacs de capteurs de remplissage. Leurs résultats montrent ce que permet une collecte guidée par l'état réel des bacs."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {KEY_FIGURES.map(f => (
          <div key={f.label} className="flex flex-col items-center justify-center text-center p-7 rounded-2xl border border-vivid/30 bg-white">
            <span className="text-4xl md:text-5xl font-black text-medium">{f.value}</span>
            <span className="mt-3 text-sm text-text/80">{f.label}</span>
            <span className="mt-1 text-xs font-semibold tracking-widest uppercase text-text/55">{f.city}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 hidden md:block overflow-hidden rounded-2xl border border-vivid/30 bg-white">
        <table className="w-full text-left text-sm text-text/75">
          <thead>
            <tr className="text-xs font-semibold tracking-widest uppercase text-medium bg-pale/60">
              <th scope="col" className="p-4">Ville</th>
              <th scope="col" className="p-4">Déploiement</th>
              <th scope="col" className="p-4">Résultats</th>
              <th scope="col" className="p-4">Retour sur investissement</th>
              <th scope="col" className="p-4">Source</th>
            </tr>
          </thead>
          <tbody>
            {CITIES.map(c => (
              <tr key={c.city} className="align-top border-t border-pale">
                <th scope="row" className="p-4 font-normal">
                  <span className="block font-bold text-forest">{c.city}</span>
                  <span className="block text-xs text-text/55">{c.country}</span>
                </th>
                <td className="p-4 leading-relaxed">{c.deployment}</td>
                <td className="p-4 leading-relaxed"><Results results={c.results} /></td>
                <td className="p-4 leading-relaxed">{c.roi}</td>
                <td className="p-4 leading-relaxed"><Sources sources={c.sources} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-12 flex flex-col gap-4 md:hidden">
        {CITIES.map(c => (
          <li key={c.city} className="p-5 rounded-2xl border border-vivid/30 bg-white text-sm text-text/75">
            <h3 className="font-bold text-forest text-base">{c.city}</h3>
            <p className="text-xs text-text/55">{c.country}</p>
            <dl className="mt-4 flex flex-col gap-3">
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-medium">Déploiement</dt>
                <dd className="mt-1 leading-relaxed">{c.deployment}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-medium">Résultats</dt>
                <dd className="mt-1 leading-relaxed"><Results results={c.results} /></dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-medium">Retour sur investissement</dt>
                <dd className="mt-1 leading-relaxed">{c.roi}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-widest uppercase text-medium">{c.sources.length > 1 ? 'Sources' : 'Source'}</dt>
                <dd className="mt-1 leading-relaxed"><Sources sources={c.sources} /></dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm leading-relaxed text-text/70">
        La recherche scientifique rapporte aussi des baisses de 18 à 42 % du temps de collecte par rapport au service classique.{' '}
        <ExternalLink label="Revue scientifique (MDPI, 2023)" href="https://doi.org/10.3390/resources12090108" />
      </p>

      <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl border-l-4 border-vivid bg-white shadow-sm">
        <p className="text-sm leading-relaxed text-text/80">
          Ces résultats proviennent de solutions commerciales déployées à grande échelle. BacConnect vise le même objectif avec un matériel plus simple et plus abordable.
        </p>
      </div>
    </Section>
  )
}
