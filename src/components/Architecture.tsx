import { ArchitectureDiagram } from './ArchitectureDiagram'
import { BinGauge } from './BinGauge'
import { Section, SectionHeading } from './Section'

const TECHNOLOGIES = [
  { name: 'ESP8266', sub: 'C++ / Arduino', emoji: '🔌', role: 'Lit les deux capteurs à tour de rôle et envoie les mesures au serveur par WiFi.' },
  { name: 'Node.js', sub: 'Express · REST', emoji: '🟩', role: 'Reçoit les mesures, calcule les pourcentages et décide du statut de ramassage.' },
  { name: 'MySQL', sub: 'Base de données', emoji: '🗄️', role: 'Conserve les bacs, les zones et leurs paramètres de calibrage.' },
  { name: 'React Native', sub: 'Expo', emoji: '⚛️', role: "Affiche l'état des bacs et des zones tel que le serveur le fournit." },
]

const TECHNICAL_CHOICES = [
  "Capteur ultrasonique HC-SR04 plutôt que le capteur laser VL53L0X prévu au départ : le laser devenait instable au-delà d'environ un mètre.",
  'Lecture strictement alternée des deux capteurs : chacun utilise une lecture bloquante, et les lire en même temps provoquait des interférences.',
  "Le backend est la seule source de vérité : l'application n'invente et ne recalcule aucune valeur.",
  "Rafraîchissement périodique plutôt qu'une connexion WebSocket : c'est suffisant pour le prototype.",
  'Alimentation filtrée localement et masses câblées en étoile, pour que les modules ne se perturbent pas entre eux.',
]

const STATES = [
  {
    color: '#4CBB6C',
    bg: '#E7F3EA',
    label: 'VERT',
    title: 'Normal',
    weight: 60,
    depth: 45,
    desc: 'Le poids reste sous 100 % du maximum et la profondeur sous 100 %. Aucune action nécessaire.',
  },
  {
    color: '#D9822B',
    bg: '#FFF3E8',
    label: 'ORANGE',
    title: 'Avertissement',
    weight: 110,
    depth: 70,
    desc: 'Le poids est entre 100 et 120 % du maximum. Le bac apparaît en orange dans le tableau de bord : une collecte est à prévoir.',
  },
  {
    color: '#C8402F',
    bg: '#FDE8E6',
    label: 'ROUGE',
    title: 'Collecte nécessaire',
    weight: 90,
    depth: 100,
    desc: 'La profondeur atteint 100 %, ou le poids dépasse 120 % du maximum. Le bac doit être vidé.',
  },
]

export function Architecture() {
  return (
    <Section id="architecture" tone="dark">
      <SectionHeading
        tone="dark"
        eyebrow="Architecture"
        title="Comment les composantes communiquent"
        intro="Le bac, le serveur et l'application sont connectés au même point d'accès WiFi. Le bac envoie ses mesures, le serveur les interprète et l'application affiche le résultat."
      />

      <ArchitectureDiagram />

      <p className="mt-6 max-w-3xl mx-auto text-center text-sm leading-relaxed text-white/60">
        Pour la démonstration, les échanges passent en HTTP sur un réseau local : c'est ce qui nous garantit une démo stable.
        La version finale du système passera au protocole MQTT, le standard de l'Internet des objets, plus léger pour des envois fréquents.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {TECHNOLOGIES.map(t => (
          <div key={t.name} className="flex flex-col items-center text-center p-5 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <span className="text-3xl mb-3" aria-hidden="true">{t.emoji}</span>
            <span className="font-bold text-white text-sm">{t.name}</span>
            <span className="text-xs text-white/40 mt-1">{t.sub}</span>
            <p className="text-xs text-white/60 leading-relaxed mt-3">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 md:p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(242,201,139,0.25)' }}>
        <h3 className="text-lg font-black text-white mb-4">Choix techniques</h3>
        <ul className="flex flex-col gap-3">
          {TECHNICAL_CHOICES.map(c => (
            <li key={c} className="flex gap-3 text-sm leading-relaxed text-white/70">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl md:text-3xl font-black text-white text-center">La logique de ramassage</h3>
        <p className="mt-4 mb-10 max-w-2xl mx-auto text-center text-base leading-relaxed text-white/60">
          Le serveur calcule deux pourcentages : le poids par rapport au poids maximal, et la hauteur des déchets par rapport à la profondeur du bac.
          Le remplissage retenu est le plus élevé des deux.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {STATES.map(s => (
            <div key={s.label} className="rounded-2xl p-7 border-2 flex flex-col gap-5" style={{ backgroundColor: s.bg, borderColor: s.color }}>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ backgroundColor: s.color }}>{s.label}</span>
                <h4 className="text-lg font-bold text-forest">{s.title}</h4>
              </div>
              <div className="flex justify-center gap-8">
                <BinGauge pct={s.weight} color={s.color} label="Poids" />
                <BinGauge pct={s.depth} color={s.color} label="Profondeur" />
              </div>
              <p className="text-sm leading-relaxed text-text/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-3xl mx-auto p-5 rounded-xl border-l-4 border-vivid" style={{ backgroundColor: 'rgba(76,187,108,0.1)' }}>
          <p className="text-sm leading-relaxed text-white/75">
            <strong className="text-white">Zones critiques.</strong> Une zone passe en critique quand la proportion de bacs pleins dépasse son seuil.
            Ce seuil se règle pour chaque zone. Les zones critiques apparaissent en premier dans le tableau de bord.
          </p>
        </div>
      </div>
    </Section>
  )
}
