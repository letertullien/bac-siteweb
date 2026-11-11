import { Section, SectionHeading } from './Section'

const GROUPS = [
  {
    title: 'Volet citoyen',
    accent: '#4CBB6C',
    items: [
      'Carte des bacs avec un niveau simplifié (faible, moyen, presque plein) et un itinéraire Google Maps.',
      'Horaires de collecte par type de déchet.',
      'Guide de bonnes pratiques de tri.',
      "Signalement d'un problème avec photo.",
      "Scan du code QR d'un bac.",
    ],
  },
  {
    title: 'Volet collecte',
    accent: '#D9822B',
    items: [
      'Tournées optimisées et assignées aux chauffeurs.',
      "Itinéraire jusqu'au point de déchargement.",
      'Détection automatique du vidage : chute du poids, confirmée par la profondeur.',
    ],
  },
  {
    title: 'Volet technique',
    accent: '#F2C98B',
    items: [
      'Passage au protocole MQTT pour la communication entre les bacs et le serveur, puis connectivité LoRaWAN pour les rues sans WiFi.',
      'Historique des mesures et des calibrages.',
      'Connexion en temps réel par WebSocket.',
      'Authentification côté serveur.',
      'Seuils configurables pour chaque bac.',
      'Hébergement en ligne stable.',
    ],
  },
  {
    title: 'Ouverture',
    accent: '#E7F3EA',
    items: [
      'API pour des partenaires, comme les organismes publics, et pour la production de statistiques.',
    ],
  },
]

export function FutureWork() {
  return (
    <Section id="ameliorations" tone="dark">
      <SectionHeading
        tone="dark"
        eyebrow="Suite du projet"
        title="Améliorations futures"
        intro="Notre première version prévoyait beaucoup plus de fonctionnalités. Nous les avons mises de côté pour nous concentrer sur la mesure du remplissage. Voici la vision complète du projet."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {GROUPS.map(g => (
          <div key={g.title} className="p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="h-1 w-12 rounded-full mb-4" style={{ backgroundColor: g.accent }} />
            <h3 className="text-lg font-black text-white mb-4">{g.title}</h3>
            <ul className="flex flex-col gap-2.5">
              {g.items.map(item => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: g.accent }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
